import { fn, expect, userEvent } from 'storybook/test';
import { Task } from './Task';

export const ActionsData = {
    onArchiveTask: fn(),
    onPinTask: fn(),
};

const meta = {
    title: 'Tutorial/Task',
    component: Task,
    tags: ['autodocs'],
    // exports ending in "Data" are not stories, so exclude them.
    excludeStories: /.*Data$/,
    args: {
        ...ActionsData,
    },
};
export default meta;

export const Default = {
    args: {
        task: {
            id: '1',
            title: 'Test Task',
            state: 'TASK_INBOX',
        },
    },
    play: async ({ canvas, userEvent, args }) => {
        const checkbox = await canvas.getAllByTestId('custom-checkbox')[0];
        await expect(checkbox).toBeInTheDocument();
        await userEvent.click(checkbox.parentNode);
        expect(args.onArchiveTask).toHaveBeenCalledWith(
            expect.any(Object), // matches the Event object passed by the click handler
            '1',
            'TASK_INBOX'
        );
    },
};

export const Pinned = {
    args: {
        task: {
            ...Default.args.task,
            state: 'TASK_PINNED',
        },
    },
};

export const Unpinned = {
    args: {
        task: {
            ...Default.args.task,
            state: 'TASK_UNPINNED',
        },
    },
};

export const Archived = {
    args: {
        task: {
            ...Default.args.task,
            state: 'TASK_ARCHIVED',
        },
    },
};
