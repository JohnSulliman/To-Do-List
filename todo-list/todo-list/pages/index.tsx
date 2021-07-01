import { useState } from 'react';
import { Task } from '../models/task';
import { TaskForm } from '../components/TaskForm';
import { TaskList } from '../components/TaskList';
import { CompletedTaskList } from '../components/CompletedTaskList';

interface State {
  newTask: Task;
  tasks: Task[];
}

export default function Home() {
  const [isCompletedActive, setCompletedListActive] = useState(false);
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

  return (

    <div>
      <h1>To-do da Blue ✔</h1>
    </div>

  );

};
