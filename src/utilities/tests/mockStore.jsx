import { createStore } from "solid-js/store";
import { createMemo } from "solid-js";

export const MockedState = {
    tasks: [
        { id: '1', title: 'Task 1', state: 'TASK_INBOX' },
        { id: '2', title: 'Task 2', state: 'TASK_INBOX' },
        { id: '3', title: 'Task 3', state: 'TASK_INBOX' },
        { id: '4', title: 'Task 4', state: 'TASK_INBOX' },
        { id: '5', title: 'Task 5', state: 'TASK_INBOX' },
        { id: '6', title: 'Task 6', state: 'TASK_INBOX' },
    ],
    status: 'idle',
    error: null,
};

export const MockedErrorState = {
    tasks: [],
    status: 'failed',
    error: 'Something went wrong',
};

// Reusable mock factory function for all component tests and stories
export const createMockStore = (mockDataState) => {
    const [state, setState] = createStore(mockDataState);

    const updateTaskState = (id, newTaskState) => {
        setState('tasks', (task) => task.id === id, 'state', newTaskState);
    };

    const selectSortedTasks = createMemo(() => {
        const tasks = state.tasks || [];
        return [
            ...tasks.filter(t => t.state === 'TASK_PINNED'),
            ...tasks.filter(t => t.state !== 'TASK_PINNED')
        ];
    });

    const selectTaskboxStatus = createMemo(() => state.status);

    return {
        state,
        fetchTasks: () => {}, 
        updateTaskState,
        selectSortedTasks,
        selectTaskboxStatus
    };
};