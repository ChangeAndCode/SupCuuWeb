import React from 'react';

interface ButtonFormProps {
  text: string;
}

const ButtonForm: React.FC<ButtonFormProps> = ({ text }) => {
  return <button type='submit'>{text}</button>;
};

export default ButtonForm;
