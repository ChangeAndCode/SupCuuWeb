'use client'

import { memo } from 'react';

interface InputFieldProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = memo(({
  label,
  id,
  type = 'text',
  required = false,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4" suppressHydrationWarning>
      <label
        htmlFor={id}
        className="block text-xl font-pragmatica uppercase text-white mb-2"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
});

InputField.displayName = 'InputField';

export default InputField;
