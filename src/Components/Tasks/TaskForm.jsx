import React, { useState } from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';

export default function TaskForm({ activeFolderId, initialData, onSubmit, onCancel, folders }) {
  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [dueDate, setDueDate] = useState(initialData?.dueDate || '');
  const [folderId, setFolderId] = useState(initialData?.folderId || activeFolderId || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !folderId) return;

    const taskData = {
      id: initialData?.id || crypto.randomUUID(),
      title: title.trim(),
      description: description.trim(),
      dueDate: dueDate || undefined,
      folderId,
      isCompleted: initialData?.isCompleted || false,
      createdAt: initialData?.createdAt || Date.now(),
      updatedAt: Date.now(),
    };

    onSubmit(taskData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-white mb-2">
        {initialData ? 'Edit Task' : 'Create New Task'}
      </h2>

      <Input 
        label="Task Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Enter task title" 
        required
      />

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-300">Description</label>
        <textarea
          className="w-full bg-inputBg border border-glassBorder text-white px-4 py-2 rounded-input focus:outline-none focus:border-crimsonStart transition-colors resize-none h-24"
          placeholder="Detailed description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <Input 
        label="Deadline" 
        value={dueDate} 
        onChange={(e) => setDueDate(e.target.value)} 
        type="date"
      />

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-300">Folder</label>
        <select
          value={folderId}
          onChange={(e) => setFolderId(e.target.value)}
          className="w-full bg-inputBg border border-glassBorder text-white px-4 py-2 rounded-input focus:outline-none focus:border-crimsonStart transition-colors appearance-none"
          required
        >
          <option value="" disabled>Select a folder</option>
          {folders?.map(f => (
            <option key={f.id} value={f.id}>{f.name}</option>
          ))}
        </select>
      </div>

      <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-glassBorder">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          {initialData ? 'Update Task' : 'Save Task'}
        </Button>
      </div>
    </form>
  );
}
