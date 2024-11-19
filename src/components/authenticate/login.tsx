import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import AppServices from '../../services/api.services';
import { useAuth } from '../../context/AuthContext';
import { useAlert } from '../../context/alert/AlertContext';
import { FaCheckCircle } from 'react-icons/fa';
import { useLocation } from "react-router-dom";



const Login: React.FC = () => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { setToken } = useAuth();
  const { showAlert } = useAlert();

  const location = useLocation();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const loginData = {
        mobileNumber: mobile,
        password,
      };
      const loginUser = await AppServices.Login(loginData);

      if (loginUser.status === 200) {
        setToken(loginUser.data.token); // ذخیره توکن پس از ورود موفق
        showAlert(
          'success',
          <div className="flex items-center">
            <FaCheckCircle className="text-white w-6 h-6" />
            <span className="mr-2">عملیات با موفقیت انجام شد!</span>
          </div>
        );
        navigate('/panel-admin'); // هدایت به داشبورد پس از لاگین موفق
      } else {
        showAlert('error', 'نام کاربری یا رمز عبور اشتباه است. لطفا دوباره تلاش کنید.');
      }
    } catch (e) {
      console.error(e);
      showAlert('error', 'مشکلی رخ داده است. لطفاً دوباره تلاش کنید.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const inputStyle = "border border-gray-300 rounded text-sm p-2 w-full text-right";

  return (
    <div className="p-4 h-screen flex items-center justify-center bg-gray-100 rtl">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-lg font-medium text-center mb-6 text-gray-700">ورود به حساب کاربری</h2>
        <form onSubmit={handleLogin}>
          {/* فیلد شماره موبایل */}
          <div className="mb-6">
            <InputText
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className={inputStyle}
              placeholder="شماره موبایل"
            />
          </div>

          {/* فیلد رمز عبور */}
          <div className="mb-6 relative">
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-600">رمز عبور</label>
              <a href="#" className="text-sm text-orange-500">فراموشی رمز عبور</a>
            </div>
            <InputText
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputStyle}
              placeholder="رمز عبور"
              type={showPassword ? 'text' : 'password'}
            />
            <span
              className="absolute top-10 left-2 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
            </span>
          </div>

          {/* دکمه ورود */}
          <Button
            label="ورود"
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white p-3 rounded text-sm font-medium mb-4"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
