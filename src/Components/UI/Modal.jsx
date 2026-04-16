import React from 'react';

export default function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div 
        className="absolute inset-0 z-0" 
        onClick={onClose}
      ></div>
      <div className="relative z-10 w-full max-w-lg bg-cardBg/90 backdrop-blur-sm border border-glassBorder rounded-card shadow-2xl overflow-hidden shadow-black/50">
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
