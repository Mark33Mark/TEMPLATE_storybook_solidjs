import { createSignal, For } from 'solid-js';
import { useAnimateList } from './useAnimateList';
import { expect, fn, within, userEvent, spyOn } from 'storybook/test';
import { Button } from '../components';

export default {
    title: 'Example/Hooks/useAnimateList',
    parameters: {
        chromatic: { disableSnapshot: true },
    },
    tags: ['autodocs'],
};

const HookHarness = () => {
    const [items, setItems] = createSignal([
        { id: '1', name: 'task 1' },
        { id: '2', name: 'task 2' },
    ]);

    const [simulateMissingContainer, setSimulateMissingContainer] = createSignal(false);
    const { setContainer, prepareFlip } = useAnimateList(items);

    window.__testHelpers = {
        prepareFlip,
        setItems,
        sabotageContainer: shouldSabotage => {
            if (shouldSabotage) {
                setSimulateMissingContainer(true);
                setContainer(null);
            } else {
                setSimulateMissingContainer(false);
                const el = document.querySelector('[data-testid="list-container"]');
                if (el) setContainer(el);
            }
        },
    };

    const handleClick = () => {
        prepareFlip();
        setItems(prev => [...prev].reverse());
    };

    const taskBarStyle = {
        'width': '80vw',
        'padding': '0.75rem',
        'border-top': '1px solid oklch(91% 0.05 208deg)',
        'background-color': 'oklch(98% 0.01 208deg)',
    };

    return (
        <div style={{ 'background-color': 'white', padding: '2rem 1.5rem' }}>
            <div ref={simulateMissingContainer() ? null : setContainer} data-testid="list-container">
                <For each={items()}>
                    {item => (
                        <div data-id={item.id} data-testid={`item-${item.id}`} style={taskBarStyle}>
                            {item.name}
                        </div>
                    )}
                </For>
            </div>

            <Button
                data-testid="trigger-btn"
                onClick={handleClick}
                label={'Shuffle Tasks'}
                size={'medium'}
                style={{ 'margin-top': '2rem' }}
            />

        </div>
    );
};

export const TestFullHookCoverage = {
    render: args => <HookHarness {...args} />,
    args: { onAnimateSpy: fn() },

    play: async ({ canvas, step }) => {
        const triggerButton = canvas.getByTestId('trigger-btn');
        const containerNode = canvas.getByTestId('list-container');

        // setup shared test spies
        const animateSpy = spyOn(Element.prototype, 'animate');
        const rectSpy = spyOn(Element.prototype, 'getBoundingClientRect').mockImplementation(function () {
            const id = this.getAttribute('data-id');
            const parent = this.parentElement;
            if (!parent || !id) return { top: 0, left: 0, bottom: 0, right: 0, width: 0, height: 0 };

            const childrenArray = Array.from(parent.children);
            const currentDOMIndex = childrenArray.indexOf(this);
            const targetTop = currentDOMIndex === 0 ? 100 : 150;
            return { top: targetTop, left: 0, bottom: 0, right: 0, width: 100, height: 50 };
        });

        // TEST SCENARIO 1: !containerRef Guard Clause Step
        await step('Exits early when containerRef is missing or null', async () => {
            window.__testHelpers.sabotageContainer(true);

            window.__testHelpers.prepareFlip();
            window.__testHelpers.setItems(prev => [...prev].reverse());

            expect(animateSpy).not.toHaveBeenCalled();

            // Teardown step state
            window.__testHelpers.sabotageContainer(false);
            animateSpy.mockClear();
        });

        // TEST SCENARIO 2: !firstRect Guard Clause Step
        await step('Exits early when layout cache map is empty', async () => {
            window.__testHelpers.setItems(prev => [...prev].reverse());

            expect(animateSpy).not.toHaveBeenCalled();
            animateSpy.mockClear();
        });

        // TEST SCENARIO 3A: !id Guard Clause Step
        await step('Skips children that have broken attribute tags', async () => {
            window.__testHelpers.prepareFlip();

            const brokenChild = document.createElement('div');
            brokenChild.innerText = 'Broken Task Node';

            // Give the brokenChild an ID so it passes the "!id" check,
            // but because it's new, it won't exist in the firstRect cache map!
            brokenChild.setAttribute('data-id', '999');
            containerNode.appendChild(brokenChild);

            window.__testHelpers.setItems(prev => [...prev].reverse());

            expect(animateSpy).toHaveBeenCalledTimes(2);

            // Teardown step mutations
            containerNode.removeChild(brokenChild);
            animateSpy.mockClear();
        });

        // TEST SCENARIO 3B: !id Guard Clause Step
        await step('Skips children that are missing data-id attribute tags', async () => {
            window.__testHelpers.prepareFlip();

            const brokenChild = document.createElement('div');
            brokenChild.innerText = 'Broken Task Node';

            containerNode.appendChild(brokenChild);

            window.__testHelpers.setItems(prev => [...prev].reverse());

            expect(animateSpy).toHaveBeenCalledTimes(2);

            // Teardown step mutations
            containerNode.removeChild(brokenChild);
            animateSpy.mockClear();
        });

        // TEST  SCENARIO 4: Happy Path Interactive Run Step
        await step('Animates layout delta shifts perfectly on standard user interaction', async () => {
            await userEvent.click(triggerButton);

            expect(animateSpy).toHaveBeenCalledTimes(2);
        });

        // Final overall story context teardown
        animateSpy.mockRestore();
        rectSpy.mockRestore();
        delete window.__testHelpers;
    },
};
