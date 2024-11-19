import React from 'react';
import { Button } from 'primereact/button';

interface SendMessageProps {
  title: string;
  data: { name: string; email: string; mobile: string };
  onCancel: () => void;
}

const SendMessage: React.FC<SendMessageProps> = ({ title, data, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-full max-w-2xl p-6 bg-gray-800 text-white rounded-xl shadow-xl animate-fadeIn lg:max-w-3xl">
        {/* عنوان فرم */}
        <h3 className="text-xl font-bold text-center mb-8 p-4 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 text-white rounded-lg shadow-md">
          {title} {`به: ${data.name}`}
        </h3>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">متن پیام:</label>
          <textarea
            rows={5}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="متن پیام خود را وارد کنید..."
          ></textarea>
        </div>

        <div className="mt-10 flex justify-between gap-4">
          <Button
            label="ارسال پیام"
            icon="pi pi-send"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg"
            onClick={() => alert('پیام ارسال شد!')}
          />
          <Button
            label="انصراف"
            icon="pi pi-times"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg"
            onClick={onCancel}
          />
        </div>
      </div>
    </div>
  );
};

export default SendMessage;
