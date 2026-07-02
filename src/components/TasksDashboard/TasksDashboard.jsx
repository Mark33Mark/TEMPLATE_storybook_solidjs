import { Show } from 'solid-js';
import { useStore } from '../../store';
import { TaskList } from '../Task';

export const TasksDashboard = () => {
    const storeInstance = useStore();

    return (
        <div class="W8D-TasksDashboard">
            {/* ERROR DASHBOARD VIEW */}
            <Show
                when={!storeInstance.state?.error}
                fallback={
                    <div class="W8D-TasksDashboardErrorMessageWrapper" role="alert">
                        <span class="W8D-TasksDashboardErrorIcon_sadFace" aria-hidden="true"></span>

                        <h2 class="W8D-TasksDashboardErrorMessage_title">Oh no!</h2>

                        <p class="W8D-TasksDashboardErrorMessage_subtitle">
                            {storeInstance.state?.error || 'We were unable to get your tasks, please try again later.'}
                        </p>
                    </div>
                }
            >
                {/* SUCCESS DASHBOARD VIEW */}
                <nav>
                    <h1 class="W8D-TasksDashboardTitle">Taskbox</h1>
                </nav>
                <TaskList />
            </Show>
        </div>
    );
};
