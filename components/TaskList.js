"use client";

import { FaCheckCircle } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiEdit2Fill } from "react-icons/ri";
import { FaClockRotateLeft } from "react-icons/fa6";
import EditForm from "./EditForm";
import { useState } from "react";


const TaskList = ({ tasks, onEditTask, onDeleteTask, onToggleTaskCompletion }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);


  const sortedTasks = tasks ? [...tasks].sort((a, b) => {
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  }) : [];

  const handleEdit = (task) => {
    setSelectedTask(task);
    setIsOpen(true);
  }

  return (
    <>
      <div className="completed-task-list">
        <h2 className="status-title">Pending Tasks</h2>
        <div className="task-list">
          {sortedTasks.map(task => (
            task.completed ? <></> : <div key={task.id} className={`task-item ${task.priority}`}>
              <h3>{task.title}</h3>
              <p style={{
                textAlign: 'left', borderRadius: '12px',
                padding: '20px',
                border: '2px solid white',
                // minWidth: '400px'
              }}>{task.description}</p>
              <div style={{ display: 'flex', gap: '20px' }}>
                <h4>Priority: {task.priority}</h4>
                <h4>Status: {task.completed ? 'Completed' : 'Pending'}</h4>
              </div>
              <div style={{ display: 'flex', marginTop: '10px', gap: '24px' }}>
                {task.completed ? <button onClick={() => onToggleTaskCompletion(task.id)}>
                  Mark As Pending
                </button> : <FaCheckCircle onClick={() => onToggleTaskCompletion(task.id)} style={{
                  borderRadius: "40px",
                  backgroundColor: 'green',
                  color: 'white',
                  fontSize: '44px', cursor: 'pointer'
                }} />}
                <RiDeleteBin6Line style={{
                  borderRadius: "40px",
                  backgroundColor: 'red',
                  color: 'white',
                  fontSize: '43px', padding: '7px', cursor: 'pointer'
                }} onClick={() => onDeleteTask(task.id)} />
                <RiEdit2Fill style={{
                  borderRadius: "40px",
                  backgroundColor: '#6a39ea',
                  color: 'white',
                  fontSize: '43px', padding: '7px', cursor: 'pointer'
                }} onClick={() => handleEdit(task)} />
              </div>
            </div>

          ))}
        </div>
      </div>

      <br></br><br></br>

      <div className="completed-task-list">
        <h2 className="status-title">Completed Tasks</h2>
        <div className="task-list">
          {sortedTasks.map(task => (
            task.completed ? <div key={task.id} className={`task-item ${task.priority}`}>
              <h3>{task.title}</h3>
              <p style={{
                textAlign: 'left', borderRadius: '12px',
                padding: '20px',
                border: '2px solid white',
                // minWidth: '400px'
              }}>{task.description}</p>
              <div style={{ display: 'flex', gap: '20px' }}>
                <h4>Priority: {task.priority}</h4>
                <h4>Status: {task.completed ? 'Completed' : 'Pending'}</h4>
              </div>
              <div style={{ display: 'flex', marginTop: '10px' }}>
                {task.completed ? <FaClockRotateLeft style={{
                  borderRadius: "40px",
                  backgroundColor: 'white',
                  color: '#d77a08',
                  fontSize: '43px', padding: '7px', cursor: 'pointer'
                }} onClick={() => onToggleTaskCompletion(task.id)} /> : ''}
              </div>
            </div> : <></>
          ))}
        </div>
      </div>

      {isOpen && (
        <EditForm
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          task={selectedTask}
          onEditTask={onEditTask}
        />
      )}


    </>
  );
};

export default TaskList;
