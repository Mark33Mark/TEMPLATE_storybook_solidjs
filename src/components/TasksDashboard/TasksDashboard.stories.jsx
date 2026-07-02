import { StoreProvider } from '../../store';
import { TasksDashboard } from './TasksDashboard';
import { createMockStore, MockedState, MockedErrorState } from '../../utilities';

const meta = {
    title: 'Example/Tasks/TasksDashboard',
    component: TasksDashboard,
    tags: ['autodocs'],
    // Enforce a valid semantic region parent for every story scenario wrapper
    decorators: [story => <main style={{ height: '100%' }}>{story()}</main>],
};
export default meta;

export const Default = {
    decorators: [
        story => (
            // wrap story with StoreProvider and seed it with a successful status
            <StoreProvider storeValue={createMockStore({ ...MockedState, status: 'succeeded' })}>
                {story()}
            </StoreProvider>
        ),
    ],
    play: async ({ canvas, userEvent, step }) => {
        await step('Star icon clicked to change task status to pinned', async () => {
            // interaction play testing works right out of the box
            const pinTask1 = await canvas.findByLabelText('PinTask-1');
            const pinTask3 = await canvas.findByLabelText('PinTask-3');

            await userEvent.click(pinTask1);
            await userEvent.click(pinTask3);
        });
    },
};

export const Error = {
    decorators: [story => <StoreProvider storeValue={createMockStore(MockedErrorState)}>{story()}</StoreProvider>],
    parameters: {
        a11y: {
            // tell the underlying axe-core engine to bypass structural landmark checks
            options: {
                rules: { region: { enabled: false } },
            },
        },
    },
};
