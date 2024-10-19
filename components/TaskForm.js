"use client";

import { useState } from 'react';

const TaskForm = ({isTaskFormModalOpen, onAddTask, toggleTaskForm }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('low');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask({
      id: Date.now(),
      title,
      description,
      priority,
      completed: false
    });
    setTitle('');
    setDescription('');
    setPriority('low');
    toggleTaskForm();
  };

  if(!isTaskFormModalOpen){
    return null;
  }

  return (
    <div className='modal-overlay'>
      <form onSubmit={handleSubmit} className="task-form modal-content">
      <h3>Add Your Task</h3>
      <input 
        type="text" 
        placeholder="Task Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required
      />
      <textarea 
        placeholder="Task Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        required
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
     <div style={{display:'flex', gap:'10px'}}>
     <button style={{marginTop: '20px'}} type="submit">Save</button>
     <button className='modal-btn-close' style={{marginTop: '20px'}} onClick={()=>toggleTaskForm()}>Cancel</button>
     </div>
    </form>
    </div>
  );
};

export default TaskForm;
