import React, { useState } from 'react';
import Modal from '../UI/Modal';
import TaskForm from './TaskForm';

export default function TaskCard({ task, folders, onUpdateTask, onDeleteTask }) {
  const [isEditing, setIsEditing] = useState(false);

  const toggleComplete = () => {
    onUpdateTask({ ...task, isCompleted: !task.isCompleted, updatedAt: Date.now() });
  };

  const formattedDate = new Date(task.createdAt).toLocaleDateString();
  const formattedTime = new Date(task.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <>
      <div className={`p-5 rounded-card border transition-all duration-300 flex flex-col bg-cardBg backdrop-blur-sm ${
        task.isCompleted ? 'border-glassBorder opacity-40' : 'border-glassBorder hover:border-crimsonStart/50 hover:shadow-glow hover:-translate-y-1'
      }`}>
        <div className="flex justify-between items-start mb-3">
          <div className="flex flex-col">
            <h3 className={`text-lg font-bold ${task.isCompleted ? 'line-through text-gray-500' : 'text-white'}`}>
              {task.title}
            </h3>
            <span className="text-xs font-semibold text-crimsonStart mt-0.5 tracking-wide">
              {formattedTime}
            </span>
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={toggleComplete}
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                task.isCompleted ? 'bg-success border-success' : 'border-gray-400 hover:border-white'
              }`}
              title="Toggle Completion"
            >
              {task.isCompleted && <span className="w-2.5 h-2.5 bg-white rounded-full"></span>}
            </button>
          </div>
        </div>
        
        {task.dueDate && (
          <p className="text-sm font-bold text-crimsonStart mb-2">
            Due: {new Date(task.dueDate).toLocaleDateString()}
          </p>
        )}
        <p className={`text-sm mb-4 flex-1 ${task.isCompleted ? 'text-gray-500' : 'text-gray-300'}`}>
          {task.description || 'No description provided.'}
        </p>

        <div className="flex justify-between items-center mt-auto pt-4 border-t border-glassBorder">
          <span className="text-xs text-gray-500">{formattedDate}</span>
          <div className="flex space-x-3">
            <button 
              onClick={() => setIsEditing(true)}
              className="text-xs text-info hover:text-info/80 font-medium transition-colors"
            >
              Edit
            </button>
            <button 
              onClick={() => onDeleteTask(task.id)}
              className="text-xs text-danger hover:text-danger/80 font-medium transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      {isEditing && (
        <Modal onClose={() => setIsEditing(false)}>
          <TaskForm 
            initialData={task}
            folders={folders}
            activeFolderId={task.folderId}
            onSubmit={(updatedTask) => {
              onUpdateTask(updatedTask);
              setIsEditing(false);
            }}
            onCancel={() => setIsEditing(false)}
          />
        </Modal>
      )}
    </>
  );
}
