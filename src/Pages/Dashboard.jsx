import React, { useState, useEffect, useMemo } from 'react';
import Sidebar from '../Components/Layout/Sidebar';
import TaskGrid from '../Components/Tasks/TaskGrid';

const TASKS_STORAGE_KEY = 'app_tasks';
const FOLDERS_STORAGE_KEY = 'app_folders';

export default function Dashboard() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem(TASKS_STORAGE_KEY);
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [folders, setFolders] = useState(() => {
    const storedFolders = localStorage.getItem(FOLDERS_STORAGE_KEY);
    if (storedFolders) {
      return JSON.parse(storedFolders);
    }
    return [{ id: crypto.randomUUID(), name: 'General', createdAt: Date.now() }];
  });

  const [activeFolderId, setActiveFolderId] = useState(() => {
    const storedFolders = localStorage.getItem(FOLDERS_STORAGE_KEY);
    if (storedFolders) {
      const parsed = JSON.parse(storedFolders);
      if (parsed.length > 0) return parsed[0].id;
    }
    return folders?.[0]?.id || null;
  });

  // Save the tasks to the browser memory so they don't disappear.
  useEffect(() => {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem(FOLDERS_STORAGE_KEY, JSON.stringify(folders));
  }, [folders]);

  // Derived state for filtered tasks
  const filteredTasks = useMemo(() => {
    if (!activeFolderId) return tasks;
    return tasks.filter(task => task.folderId === activeFolderId);
  }, [tasks, activeFolderId]);

  // This function adds a new task to the list.
  const handleCreateTask = (newTask) => {
    setTasks(prev => [...prev, newTask]);
  };

  const handleUpdateTask = (updatedTask) => {
    setTasks(prev => prev.map(t => t.id === updatedTask.id ? updatedTask : t));
  };

  // This function deletes a task from the list.
  const handleDeleteTask = (taskId) => {
    setTasks(prev => prev.filter(t => t.id !== taskId));
  };

  const handleCreateFolder = (newFolder) => {
    setFolders(prev => [...prev, newFolder]);
  };

  // This function deletes a folder and also deletes its tasks.
  const handleDeleteFolder = (folderId) => {
    setFolders(prev => prev.filter(f => f.id !== folderId));
    setTasks(prev => prev.filter(t => t.folderId !== folderId));
    if (activeFolderId === folderId) {
      setActiveFolderId(null);
    }
  };

  return (
    <div className="flex h-screen w-screen bg-pageBg text-white overflow-hidden font-sans m-0 p-0 absolute top-0 left-0 right-0 bottom-0">
      <Sidebar 
        folders={folders} 
        activeFolderId={activeFolderId}
        onSelectFolder={setActiveFolderId}
        onCreateFolder={handleCreateFolder}
        onDeleteFolder={handleDeleteFolder}
        tasks={tasks}
      />
      <main className="flex-1 overflow-y-auto p-8 border-l border-glassBorder bg-pageBg h-full">
        <TaskGrid 
          tasks={filteredTasks} 
          activeFolderId={activeFolderId}
          folders={folders}
          onCreateTask={handleCreateTask}
          onUpdateTask={handleUpdateTask}
          onDeleteTask={handleDeleteTask}
        />
      </main>
    </div>
  );
}
