'use client';

import { type ChangeEvent } from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'select';
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
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
  const baseClasses = `
    mt-1 block w-full px-4 py-2 
    border border-gray-300 
    rounded-2xl shadow-sm 
    focus:outline-none focus:ring-2 focus:ring-ColorPrincipal
    font-pragmatica
    ${error ? 'border-red-500' : ''}
    ${disabled ? 'bg-gray-100' : 'bg-white'}
    text-gray-900
  `;

  return (
    <div className="mb-4">
      <label 
        htmlFor={name} 
        className="block text-xl font-pragmatica uppercase text-ColorPrincipal font-bold mb-2"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      {type === 'select' ? (
        <div className="relative">
          <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className={`${baseClasses} appearance-none`}
            required={required}
            disabled={disabled}
          >
            <option value="">Select an option</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
        </div>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={baseClasses}
          required={required}
          disabled={disabled}
        />
      )}
      
      {error && (
        <p className="mt-1 text-sm text-red-500 font-pragmatica" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};