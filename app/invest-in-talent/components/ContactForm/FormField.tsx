'use client';

import { type ChangeEvent } from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'textarea';
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  error?: string;
  disabled?: boolean;
}

export const FormField = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
  error,
  disabled
}: FormFieldProps) => {
  const inputClasses = `w-full px-4 py-2 rounded transition-colors
    ${error ? 'border-2 border-red-500' : 'border border-gray-300'}
    ${disabled ? 'bg-gray-100' : 'bg-white'}
    focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900
    font-pragmatica`;

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block font-medium font-pragmatica">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={inputClasses}
          required={required}
          disabled={disabled}
          rows={4}
        />
      ) : (
        <input
          type="text"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={inputClasses}
          required={required}
          disabled={disabled}
        />
      )}
      {error && <p className="text-red-500 text-sm font-pragmatica" role="alert">{error}</p>}
    </div>
  );
};