import React, { createContext, useContext, ReactNode } from 'react';
import { toast, ToastContainer, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './alert.css';

interface AlertContextType {
    showAlert: (type: 'success' | 'error' | 'warning' | 'info', customContent?: JSX.Element | ReactNode, title?: string, description?: string) => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const useAlert = () => {
    const context = useContext(AlertContext);
    if (!context) {
        throw new Error('useAlert must be used within an AlertProvider');
    }
    return context;
};

interface AlertProviderProps {
    children: ReactNode;
}

const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
    const showAlert = (type: 'success' | 'error' | 'warning' | 'info', customContent?: JSX.Element | ReactNode, title?: string, description?: string) => {
        const options: ToastOptions = {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            rtl: true,
            closeButton: (
                <button className="absolute top-1 left-1 text-white opacity-80 hover:opacity-100">
                    ✕
                </button>
            ),
        };

        const typeStyles = {
            success: 'bg-green-500 text-white rounded-md shadow-md',
            error: 'bg-red-500 text-white rounded-md shadow-md',
            warning: 'bg-yellow-500 text-white rounded-md shadow-md',
            info: 'bg-blue-500 text-white rounded-md shadow-md',
        };

        toast(
            <div className={`relative p-4 ${typeStyles[type]} bg-opacity-90`}>
                {customContent ? (
                    customContent
                ) : (
                    <>
                        {title && <div className="font-bold">{title}</div>}
                        {description && <div>{description}</div>}
                    </>
                )}
            </div>,
            options
        );
    };

    return (
        <AlertContext.Provider value={{ showAlert }}>
            {children}
            <ToastContainer className="custom-toast-container" />
        </AlertContext.Provider>
    );
};

export { AlertProvider };
