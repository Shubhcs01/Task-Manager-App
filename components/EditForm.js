"use client";

import { useState } from 'react';

const EditForm = ({isOpen, setIsOpen, task, onEditTask }) => {
  console.log(task)
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);

  const handleSubmit = (e) => {
    e.preventDefault();

    onEditTask({
      ...task,  title,
      description,
      priority
    })

    setIsOpen(false);
  };

  if(!isOpen){
    return null;
  }

  return (
    <div className='modal-overlay'>
      <form onSubmit={handleSubmit} className="task-form modal-content">
      <h3>Edit Your Task</h3>
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
     <button className='modal-btn-close' style={{marginTop: '20px'}} onClick={()=>setIsOpen(false)}>Cancel</button>
     </div>
    </form>
    </div>
  );
};

export default EditForm;
