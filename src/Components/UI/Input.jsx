import React from 'react';

export default function Input({ label, value, onChange, placeholder, type = 'text', required = false, className = '', ...props }) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && <label className="text-sm font-medium text-gray-300">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-inputBg border border-glassBorder text-white px-4 py-2 rounded-input focus:outline-none focus:border-crimsonStart transition-colors"
        {...props}
      />
    </div>
  );
}
