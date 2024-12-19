
interface InputFieldProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({ label, id, type = 'text', required = false, value, onChange }: InputFieldProps) => {
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
        className={`relative z-50 mt-1 block w-full px-4 py-4 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
      />
    </div>
  );
};

export default InputField;
