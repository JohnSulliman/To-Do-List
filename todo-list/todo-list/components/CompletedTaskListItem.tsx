import { FunctionComponent } from 'react';
import { Task } from '../models/task';

interface Props {
    task: Task;
    onDelete: (task: Task) => void;
}

export const CompletedTaskListItem: FunctionComponent<Props> = ({task, onDelete}) => {
    const onClick = () => {
        onDelete(task);
    }

    return(
        <>
            <li>
                <span>{task.name}</span>
                <button onClick={onClick}>X</button>
            </li>
        </>
    )
}