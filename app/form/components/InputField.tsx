import React from 'react';

interface InputFieldProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  type = 'text',
  required = false,
  value,
  onChange,
  defaultValue = '',
}) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="mb-4">
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
        value={mounted ? value : defaultValue}
        onChange={onChange}
        required={required}
        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        suppressHydrationWarning
      />
    </div>
  );
};

export default InputField;
