import { useState } from 'react';
import { Task } from '../models/task';
import { TaskForm } from '../components/TaskForm';
import { TaskList } from '../components/TaskList';
import { CompletedTaskList } from '../components/CompletedTaskList';

interface State {
  newTask: Task;
  tasks: Task[];
};

export default function Home() {
  const [completedListActive, setCompletedListActive] = useState(false);
  const [newTask, setNewTask] = useState({
    id: 1,
    name: '',
    completed: false
  });
  const [tasks, setTasks] = useState(new Array<Task>());
  const [completedTasks, setCompletedTasks] = useState(new Array<Task>());
  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setNewTask({
      id: newTask.id + 1,
      name: '',
      completed: false
    });

    setTasks([...tasks, newTask]);

  };

  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask({
      ...newTask,
      name: event.target.value
    });

  };

  const deleteTask = (taskToDelete: Task) => {
    setTasks( [...tasks.filter(task => task.id !== taskToDelete.id)] )
    setCompletedTasks( [...completedTasks, taskToDelete] )
  };

  const undoTask = (taskToUndo: Task) => {
    setCompletedTasks( [...completedTasks.filter(task => task.id !== taskToUndo.id)] )
    setTasks([...tasks, taskToUndo])
  };

  const completeListActiveElement = (
    <>
      <input 
        onChange={() => setCompletedListActive(!completedListActive)}
        type='checkbox'
        defaultValue={completedListActive.toString()}
        id='completedListActive'
      />
      <label htmlFor='completedListActive'>Tarefas Concluídas</label>
    </>
  )

  return (

    <div>

      <h1>To-do da Blue ✔</h1>

      <TaskForm 
        onChange={handleTaskChange}
        onAdd={addTask}
        task={newTask}
        disabled={newTask.name.length == 0}
      />

      {completeListActiveElement}

      <div>
        <TaskList tasks={tasks} onDelete={deleteTask} />
        {completedListActive ? (
          <CompletedTaskList tasks={completedTasks} onDelete={undoTask} />
        ) : null}
      </div>

    </div>

  );

};
