import React from 'react';

interface InputFieldProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  additionalClass?: string;
}

const InputField = ({ label, id, type = 'text', required = false, value, onChange, additionalClass = '' }: InputFieldProps) => {
  return (
    <div>
      <label htmlFor={id} className='block text-xl font-pragmatica uppercase text-white mb-[1rem]'>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        className={`relative z-50 mt-1 block w-full px-4 py-3 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${additionalClass}`}
      />
    </div>
  );
};

export default InputField;
