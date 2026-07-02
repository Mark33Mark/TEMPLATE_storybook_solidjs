import { createStore } from 'solid-js/store';
import { createResource, createMemo, createEffect, createRoot, createContext, useContext } from 'solid-js';

const defaultInitialState = {
    tasks: [],
    status: 'idle',
    error: null,
};

/* v8 ignore next */
const fetchTasksData = async () => {
    // Wrapped securely to prevent any quiet network rejections from stalling the UI
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?userId=1');
        if (!response.ok) throw new Error('Network response was unsuccessful');

        const data = await response.json();
        return data.map(task => ({
            id: `${task.id}`,
            title: task.title,
            state: task.completed ? 'TASK_ARCHIVED' : 'TASK_INBOX',
        }));
    } catch (err) {
        // Explicitly rethrow so createResource catches the failure state
        throw new Error(`We were unable to get your tasks, please try again later. \n\n${err}`);
    }
};

/* v8 ignore next */
export const createTaskStore = (initialState = defaultInitialState) => {
    const [state, setState] = createStore(initialState);

    const updateTaskState = (id, newTaskState) => {
        setState('tasks', task => task.id === id, 'state', newTaskState);
    };

    const [tasksResource, { refetch }] = createResource(fetchTasksData);

    createEffect(() => {
        if (tasksResource.loading) {
            setState({ status: 'loading', error: null, tasks: [] });
        } else if (tasksResource.error) {
            // Catches any thrown exceptions and shifts the UI out of the loading freeze
            setState({
                status: 'failed',
                error: 'We were unable to get your tasks, please try again later.',
                tasks: [],
            });
        } else if (tasksResource.state === 'ready') {
            setState({ status: 'succeeded', error: null, tasks: tasksResource() });
        }
    });

    const selectSortedTasks = createMemo(() => {
        const tasks = state.tasks || [];
        return [...tasks.filter(t => t.state === 'TASK_PINNED'), ...tasks.filter(t => t.state !== 'TASK_PINNED')];
    });

    const selectTaskboxStatus = createMemo(() => state.status);

    return {
        state,
        fetchTasks: refetch,
        updateTaskState,
        selectSortedTasks,
        selectTaskboxStatus,
    };
};

const StoreContext = createContext();
export const store = createRoot(() => createTaskStore());

export const StoreProvider = props => {
    return <StoreContext.Provider value={props.storeValue}>{props.children}</StoreContext.Provider>;
};

export const useStore = () => {
    return useContext(StoreContext) || store;
};
