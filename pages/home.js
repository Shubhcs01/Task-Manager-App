"use client";

import { useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { IoAdd } from "react-icons/io5";

export default function Home({ initialTasks }) {

    const [tasks, setTasks] = useState(initialTasks || [{ id: 1, title: 'Task Zero', description: 'Description Zero', priority: 'high', completed: false },
    ]);
    const [isTaskFormModalOpen, setIsTaskFormModal] = useState(false);


    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const editTask = (updatedTask) => {
        setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const toggleTaskCompletion = (taskId) => {
        setTasks(
            tasks.map(task =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const toggleTaskForm = () => {
        setIsTaskFormModal(!isTaskFormModalOpen);
    }

    return (
        <div className={`container`}>
            <h1 className='title'>Task Management App</h1>
            <hr />
            <div className='add-task-btn' style={{ marginBottom: '10px' }} onClick={toggleTaskForm} ><IoAdd className='add-icon' /> <p>ADD</p></div>
            <TaskList
                tasks={tasks}
                onEditTask={editTask}
                onDeleteTask={deleteTask}
                onToggleTaskCompletion={toggleTaskCompletion}
            />
            <TaskForm isTaskFormModalOpen={isTaskFormModalOpen} onAddTask={addTask} toggleTaskForm={toggleTaskForm} />
        </div>

    );
}
