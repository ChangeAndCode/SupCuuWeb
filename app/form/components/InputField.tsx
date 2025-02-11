'use client'

import { memo, useId } from 'react';

interface InputFieldProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  options?: string[];
}

const InputField: React.FC<InputFieldProps> = memo(({
  label,
  id,
  type = 'text',
  required = false,
  value,
  onChange,
  options = []
}) => {
  // Generate a unique ID for this instance
  const uniqueId = useId();
  const fieldId = `${id}-${uniqueId}`;
  
  const baseClasses = "mt-1 block w-full px-4 py-3 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="mb-4">
      <label
        htmlFor={fieldId}
        className="block text-xl font-pragmatica uppercase text-white mb-2"
      >
        {label}
      </label>
      
      {type === 'select' ? (
        <div className="relative">
          <select
            id={fieldId}
            name={id}
            value={value}
            onChange={onChange}
            required={required}
            className={`${baseClasses} appearance-none bg-white`}
          >
            <option value="">Select an option</option>
            {options.map((option) => (
              <option key={`${option}-${uniqueId}`} value={option}>{option}</option>
            ))}
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
          id={fieldId}
          name={id}
          value={value}
          onChange={onChange}
          required={required}
          className={`${baseClasses} bg-white`}
        />
      )}
    </div>
  );
});

InputField.displayName = 'InputField'; 

export default InputField;