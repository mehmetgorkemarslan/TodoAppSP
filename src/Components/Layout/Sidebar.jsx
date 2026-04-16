import React, { useState } from 'react';

export default function Sidebar({ folders, activeFolderId, onSelectFolder, onCreateFolder, onDeleteFolder, tasks }) {
  const [newFolderName, setNewFolderName] = useState('');

  const handleAddFolder = (e) => {
    e.preventDefault();
    if (!newFolderName.trim()) return;
    onCreateFolder({
      id: crypto.randomUUID(),
      name: newFolderName.trim(),
      createdAt: Date.now()
    });
    setNewFolderName('');
  };

  const getTaskCountForFolder = (folderId) => {
    return tasks.filter(t => t.folderId === folderId).length;
  };

  return (
    <aside className="w-[20%] min-w-[250px] max-w-[300px] h-full p-6 flex flex-col bg-sidebarBg border-r border-glassBorder backdrop-blur-md">
      <div className="mb-10">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-crimsonStart to-crimsonEnd bg-clip-text text-transparent tracking-wider uppercase">Task Manager</h1>
        <p className="text-gray-400 text-sm mt-1">Organize your workflow</p>
      </div>

      <div className="flex-1 overflow-y-auto pr-2">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">Folders</h2>
        <nav className="flex flex-col gap-2">
          {folders.map(folder => (
            <div key={folder.id} className="group relative flex items-center">
              <button
                onClick={() => onSelectFolder(folder.id)}
                className={`flex-1 flex justify-between items-center px-4 py-3 rounded-input transition-all duration-300 border border-transparent pr-12 ${
                  activeFolderId === folder.id 
                    ? 'bg-gradient-to-r from-crimsonStart to-crimsonEnd text-white shadow-glow border-glassBorder' 
                    : 'text-gray-300 hover:bg-innerBg hover:text-white hover:border-glassBorder'
                }`}
              >
                <span className="font-medium truncate">{folder.name}</span>
                <span className="text-xs bg-black/30 px-2 py-1 rounded-full text-white">
                  {getTaskCountForFolder(folder.id)}
                </span>
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteFolder(folder.id);
                }}
                title="Delete Folder"
                className="absolute right-3 opacity-0 group-hover:opacity-100 text-gray-400 hover:text-danger transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          ))}
        </nav>
      </div>

      <div className="mt-8 pt-6 border-t border-glassBorder">
        <form onSubmit={handleAddFolder} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="New Folder Name"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
            className="w-full bg-inputBg border border-glassBorder text-white px-4 py-2 rounded-input focus:outline-none focus:border-crimsonStart transition-colors"
          />
          <button 
            type="submit"
            className="w-full bg-innerBg hover:bg-innerBg/80 border border-glassBorder text-white px-4 py-2 rounded-input font-medium transition-colors"
          >
            Add Folder
          </button>
        </form>
      </div>
    </aside>
  );
}
