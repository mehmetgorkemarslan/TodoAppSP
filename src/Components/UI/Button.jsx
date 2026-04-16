import React from 'react';

export default function Button({ children, onClick, type = 'button', variant = 'primary', className = '', ...props }) {
  const baseStyle = "px-4 py-2 rounded-input font-medium transition-all duration-300 focus:outline-none";
  
  const variants = {
    primary: "bg-gradient-to-r from-crimsonStart to-crimsonEnd hover:shadow-glow text-white shadow-glow border border-glassBorder",
    secondary: "bg-transparent border border-glassBorder text-gray-300 hover:text-white hover:bg-innerBg",
    danger: "bg-dangerBg border border-danger/50 text-danger hover:bg-danger hover:text-white"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
