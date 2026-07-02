import { Show } from 'solid-js';

export const Task = props => {
    return (
        <div class={`W8D-TaskListItem ${props.task.state}`} data-id={props.task.id}>
            <label
                htmlFor={`W8D-ArchiveTask-${props.task.id}`}
                aria-label={`ArchiveTask-${props.task.id}`}
                class="W8D-TaskCheckboxLabel"
            >
                <input
                    id={`W8D-ArchiveTask-${props.task.id}`}
                    data-testid={`task-checkbox-${props.task.id}`}
                    type="checkbox"
                    name="checked"
                    class="W8D-TaskCheckbox"
                    onChange={event => props.onArchiveTask(event, props.task.id, props.task.state)}
                    checked={props.task.state === 'TASK_ARCHIVED'}
                />
                <span data-testid="custom-checkbox" />
            </label>

            <label htmlFor={`task-title_${props.task.id}`} aria-label={props.task.title} class="W8D-TaskTitleLabel">
                <textarea
                    id={`task-title_${props.task.id}`}
                    rows="2"
                    cols="1"
                    type="text"
                    name="title"
                    class="W8D-TaskTextbox"
                    placeholder="provide a task"
                    value={props.task.title}
                    readOnly={true}
                />
            </label>

            {/* removed this logic in favour of using CSS and retaining the container the icon occupies during TASK_ARCHIVED state */}
            {/* <Show when={props.task.state !== 'TASK_ARCHIVED'}> */}
                <button
                    class="W8D-TaskPinButton"
                    onClick={event => props.onPinTask(event, props.task.id, props.task.state)}
                    id={`pin-task_${props.task.id}`}
                    aria-label={`PinTask-${props.task.id}`}
                >
                    <span class="W8D-TaskStarIcon" />
                </button>
            {/* </Show> */}
        </div>
    );
};
