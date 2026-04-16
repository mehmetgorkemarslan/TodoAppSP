import React, { useState } from 'react';
import TaskCard from './TaskCard';
import TaskForm from './TaskForm';
import Modal from '../UI/Modal';

export default function TaskGrid({ tasks, activeFolderId, folders, onCreateTask, onUpdateTask, onDeleteTask }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeFolderName = folders.find(f => f.id === activeFolderId)?.name || 'Unknown';
  // This filter shows only the tasks that are not finished.
  const activeTasks = tasks.filter(t => !t.isCompleted);
  // This filter shows only the tasks that are finished.
  const completedTasks = tasks.filter(t => t.isCompleted);

  return (
    <div className="flex flex-col h-full w-full">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-light text-white tracking-wide">{activeFolderName}</h2>
          <p className="text-gray-400 mt-2">
            {activeTasks.length} active, {completedTasks.length} completed.
          </p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-crimsonStart to-crimsonEnd hover:shadow-glow text-white px-6 py-3 rounded-input font-bold shadow-glow transition-all transform hover:-translate-y-1 border border-glassBorder"
        >
          Create New Task
        </button>
      </header>

      {tasks.length === 0 ? (
        <div className="flex-1 flex items-center justify-center border-2 border-dashed border-glassBorder rounded-card bg-cardBg backdrop-blur-sm">
          <p className="text-gray-400 text-lg">No tasks found. Create one to get started.</p>
        </div>
      ) : (
        <div className="flex-1 flex flex-col gap-10 pb-8">
          {activeTasks.length > 0 && (
            <section>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-gradient-to-r from-crimsonStart to-crimsonEnd"></span> Active Tasks
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-max">
                {activeTasks.map(task => (
                  <TaskCard 
                    key={task.id} 
                    task={task} 
                    folders={folders}
                    onUpdateTask={onUpdateTask}
                    onDeleteTask={onDeleteTask}
                  />
                ))}
              </div>
            </section>
          )}

          {completedTasks.length > 0 && (
            <section className="mt-4">
              <h3 className="text-xl font-semibold text-gray-500 mb-4 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-gray-500"></span> Completed Tasks
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-max">
                {completedTasks.map(task => (
                  <TaskCard 
                    key={task.id} 
                    task={task} 
                    folders={folders}
                    onUpdateTask={onUpdateTask}
                    onDeleteTask={onDeleteTask}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      )}

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <TaskForm 
            activeFolderId={activeFolderId}
            folders={folders}
            onSubmit={(newTask) => {
              onCreateTask(newTask);
              setIsModalOpen(false);
            }} 
            onCancel={() => setIsModalOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
}
