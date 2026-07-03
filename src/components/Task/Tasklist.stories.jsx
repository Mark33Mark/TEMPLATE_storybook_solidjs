import { createStore } from 'solid-js/store';
import { createMemo } from 'solid-js';
import { StoreProvider } from '../../store';
import { TaskList } from './TaskList';
import { createMockStore, MockedState } from '../../utilities';

import { expect, userEvent, within } from 'storybook/test';

const meta = {
    title: 'Example/Tasks/TaskList',
    component: TaskList,
    decorators: [story => <div>{story()}</div>],
    tags: ['autodocs'],
    excludeStories: /.*MockedState$/,
};
export default meta;

export const Default = {
    decorators: [story => <StoreProvider storeValue={createMockStore(MockedState)}>{story()}</StoreProvider>],
    play: async ({ canvas, canvasElement, step }) => {

        await step('Item wrapper class updates with user interaction pinning item', async () => {
            const pinTask1 = canvas.getByRole('button', { name: 'PinTask-1' });
            const parent = pinTask1.closest('.W8D-TaskListItem');

            // Dynamically check the current class list to support live user interactions
            const isPinnedBeforeClick = parent.classList.contains('TASK_PINNED');

            await userEvent.click(pinTask1);

            if (isPinnedBeforeClick) {
                expect(parent).toHaveClass('TASK_UNPINNED');
            } else {
                expect(parent).toHaveClass('TASK_PINNED');
            }

            // restore state
            await userEvent.click(pinTask1);
        });

        await step('Item wrapper class updates with user interaction archiving item', async () => {
            // Directly target the input element by its ID inside the canvas
            const checkbox = canvasElement.querySelector('#W8D-ArchiveTask-5');
            const statusBeforeClick = checkbox.checked;

            await userEvent.click(checkbox);

            // dynamically assert based on user-driven state
            if (statusBeforeClick) {
                expect(checkbox).not.toBeChecked();
            } else {
                expect(checkbox).toBeChecked();
            }

            // Restore state cleanly
            if (checkbox.checked !== statusBeforeClick) {
                await userEvent.click(checkbox);
            }
        });
    },
};

export const WithPinnedTasks = {
    decorators: [
        story => {
            const pinnedTasks = [
                ...MockedState.tasks.slice(0, 5),
                { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
            ];
            return (
                <StoreProvider storeValue={createMockStore({ ...MockedState, tasks: pinnedTasks })}>
                    {story()}
                </StoreProvider>
            );
        },
    ],
};

export const Loading = {
    decorators: [
        story => (
            <StoreProvider storeValue={createMockStore({ ...MockedState, status: 'loading' })}>{story()}</StoreProvider>
        ),
    ],
};

export const Empty = {
    decorators: [
        story => <StoreProvider storeValue={createMockStore({ ...MockedState, tasks: [] })}>{story()}</StoreProvider>,
    ],
};
