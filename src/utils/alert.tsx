import React, { useEffect } from 'react';
import { ToastContainer, toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface AlertProps {
  success?: boolean;
  error?: boolean;
  warning?: boolean;
  info?: boolean;
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({ success, error, warning, info, title, description, children }) => {
  useEffect(() => {
    let type: 'success' | 'error' | 'warning' | 'info' | null = null;
    if (success) type = 'success';
    else if (error) type = 'error';
    else if (warning) type = 'warning';
    else if (info) type = 'info';

    if (type) {
      showToast(type);
    }
  }, [success, error, warning, info]);

  const showToast = (type: 'success' | 'error' | 'warning' | 'info') => {
    const options: ToastOptions = {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      rtl: true,
      closeButton: (
        <button className="absolute top-4 left-4 text-white opacity-80 hover:opacity-100">
          ✕
        </button>
      ),
      progressClassName: 'bg-white h-1 absolute top-4 left-4 w-full rounded-b-md', // Custom progress bar styling
    };

    const typeStyles = {
      success: 'bg-green-500 text-white rounded-md shadow-md',
      error: 'bg-red-500 text-white rounded-md shadow-md',
      warning: 'bg-yellow-500 text-white rounded-md shadow-md',
      info: 'bg-blue-500 text-white rounded-md shadow-md',
    };

    const gradientBackgrounds = {
      success: 'bg-gradient-to-br from-green-400 via-green-500 to-green-600',
      error: 'bg-gradient-to-br from-red-400 via-red-500 to-red-600',
      warning: 'bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600',
      info: 'bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600',
    };

    toast(
      <div className={`relative p-4 ${typeStyles[type]} ${gradientBackgrounds[type]} bg-opacity-90`}>
        {title && <div className="font-bold">{title}</div>}
        {children || <div>{description}</div>}
      </div>,
      options
    );
  };

  return (
    <ToastContainer
      rtl={true}
      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
      toastClassName={() => "bg-transparent shadow-none relative"}
      bodyClassName={() => "relative"}
    />
  );
};

export default Alert;
