import { FunctionComponent } from "react";
import { Task } from "../models/task";
import { TaskListItem } from "./TaskListItem";

interface Props {
    tasks: Task[];
    onDelete: (task: Task) => void;
}

export const TaskList: FunctionComponent<Props> = ({ tasks, onDelete }) => (
    <>
        <div>
            <h2>Tarefas</h2>
            {tasks.length == 0 ? "-" : null}
            <ul>
                {
                    tasks.map((task, _i) => (
                        <TaskListItem key={_i} task={task} onDelete={onDelete}/>
                    ) )
                }
            </ul>
        </div>
    </>
)