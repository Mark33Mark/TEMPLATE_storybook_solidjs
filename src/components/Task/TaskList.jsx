import { Show, For, Index } from 'solid-js';
import { useStore } from '../../store';
import { Task } from './Task';
import { useAnimateList } from '../../hooks/useAnimateList';

export const TaskList = () => {
    // 1. Extract what we need directly from the global Solid store
    const storeInstance = useStore();

    // 2. Initialise your ported FLIP animation hook
    const { setContainer, prepareFlip } = useAnimateList(() => storeInstance.selectSortedTasks?.() || []);

    // 3. Simple action wrappers (no dispatch needed)
    const pinTask = (event, id, currentState) => {
        event.stopPropagation();
        const newTaskState = currentState === 'TASK_PINNED' ? 'TASK_UNPINNED' : 'TASK_PINNED';
        prepareFlip(); // 1. Freeze-frame current DOM positions
        storeInstance.updateTaskState(id, newTaskState);
    };

    const archiveTask = (event, id, currentState) => {
        event.stopPropagation();
        const newTaskState = currentState === 'TASK_ARCHIVED' ? 'TASK_INBOX' : 'TASK_ARCHIVED';
        prepareFlip(); 
        storeInstance.updateTaskState(id, newTaskState);
    };

    // 4. Clean loading template 
    const LoadingRow = () => (
        <div class='W8D-TaskListItemsLoading'>
            <span class='W8D-TaskListItemsGlowCheckbox' />
            <span class='W8D-TaskListItemsGlowText'>
                <span>Loading</span> <span>cool</span> <span>state</span>
            </span>
        </div>
    );

    return (
        // 5. Use <Show> for conditional layout structures instead of early returns
        <Show 
            when={storeInstance.state?.status !== 'loading'} 
            fallback={
                <div class='list-items' data-testid='loading'>
                    {/* Index is highly optimized for repeating primitive/static elements */}
                    <Index each={Array(6)}>{() => <LoadingRow />}</Index>
                </div>
            }
        >
            <Show 
                when={storeInstance.selectSortedTasks && storeInstance.selectSortedTasks().length > 0}
                fallback={
                    <div class='W8D-TaskListItems' data-testid='empty'>
                        <div class='W8D-TaskListItemsWrapperMessage'>
                            <span class='W8D-TaskListItemsIconTicked' />
                            <p class='W8D-TaskListItemsTitleMessage'>You have no tasks</p>
                            <p class='W8D-TaskListItemsSubtitleMessage'>
                                ...sit back, relax <span class='W8D-TaskListItemsSubtitleMessage_emoticon'>😌</span>
                            </p>
                        </div>
                    </div>
                }
            >
                {/* SUCCESS STATE */}
                <div ref={setContainer} class='W8D-TaskListItems' data-testid='success'>
                    {/* For handles dynamic list re-ordering efficiently by tracking element IDs */}
                    <For each={storeInstance.selectSortedTasks()}>
                        {(task) => (
                            <Task 
                                task={task} 
                                onPinTask={pinTask} 
                                onArchiveTask={archiveTask} 
                            />
                        )}
                    </For>
                </div>
            </Show>
        </Show>
    );
};
