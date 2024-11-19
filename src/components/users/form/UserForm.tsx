import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { useAlert } from '../../../context/alert/AlertContext';
import { FaCheckCircle } from 'react-icons/fa';

interface EditFormProps {
  title: string;
  data: { id?: number; name: string; email: string; mobile: string; userType: string; level: string };
  onSave: (updatedData: any) => void;
  onCancel: () => void;
}

const EditForm: React.FC<EditFormProps> = ({ title, data, onSave, onCancel }) => {
  const [formData, setFormData] = useState<typeof data>(data);

  const { showAlert } = useAlert();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(formData);
    showAlert(
      'success',
      <div className="flex items-center">
        <FaCheckCircle className="text-white w-6 h-6" />
        <span className="mr-2">عملیات با موفقیت انجام شد!</span>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-full max-w-2xl p-6 bg-gray-800 text-white rounded-xl shadow-xl animate-fadeIn lg:max-w-3xl">
        <h3 className="text-xl font-bold text-center mb-8 p-4 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 text-white rounded-lg shadow-md">
          {title}
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">نام:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">ایمیل:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">شماره تلفن:</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              disabled
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white opacity-50 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">نوع کاربر:</label>
            <select
              name="userType"
              value={formData.userType}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="مدیر">مدیر</option>
              <option value="کاربر">کاربر</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">سطح عملیات:</label>
            <select
              name="level"
              value={formData.level}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="سطح 1">سطح 1</option>
              <option value="سطح 2">سطح 2</option>
              <option value="سطح 3">سطح 3</option>
            </select>
          </div>
        </div>
        <div className="mt-10 flex justify-between gap-4">
          <Button
            label="ذخیره"
            icon="pi pi-check"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg"
            onClick={handleSave}
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

export default EditForm;
