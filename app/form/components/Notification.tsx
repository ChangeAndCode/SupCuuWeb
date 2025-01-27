// app/form/components/Notification.tsx
import React from 'react';

interface NotificationProps {
  type: 'success' | 'error';
  message: string;
}

const Notification: React.FC<NotificationProps> = ({ type, message }) => {
  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
  
  return (
    <div className={`${bgColor} text-white p-4 rounded-lg w-full text-center`}>
      {message}
    </div>
  );
};

export default Notification;