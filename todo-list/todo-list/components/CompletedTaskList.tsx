import { FunctionComponent } from "react";
import { Task } from "../models/task";
import { CompletedTaskListItem } from "./CompletedTaskListItem";

interface Props {
    tasks: Task[];
    onDelete: (task: Task) => void;
}

export const CompletedTaskList: FunctionComponent<Props> = ({ tasks, onDelete }) => (
    <>
        <div>
            <h2>Tarefas Completas</h2>
            {tasks.length == 0 ? "-" : null}
            <ul>
                {
                    tasks.map((task, _i) => (
                        <CompletedTaskListItem key={_i} task={task} onDelete={onDelete}/>
                    ) )
                }
            </ul>
        </div>
    </>
)