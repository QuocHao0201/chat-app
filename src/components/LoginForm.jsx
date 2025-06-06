import React, { useState } from "react";
import { FiPhone, FiLock } from "react-icons/fi";
import { Link, useNavigate  } from "react-router-dom";
import PhoneValidate from "../utils/PhoneValidate";
import PasswordValidate from "../utils/PasswordValidate";
import * as yup from "yup";
import { login } from "../api/auth/login";

export default function LoginForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loginStatus, setLoginStatus] = useState("");
  const navigate = useNavigate();



  

const handleLogin = async () => {
  const newErrors = {};

  if (!PhoneValidate(phoneNumber)) {
    newErrors.phoneNumber = "❌ Số điện thoại không hợp lệ";
  }

  if (!PasswordValidate(password)) {
    newErrors.password = "❌ Mật khẩu không hợp lệ";
  }

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors); // Cập nhật lỗi để hiển thị
    return;
  }

  // Không có lỗi → tiếp tục đăng nhập
  setErrors({});
  try {
    const data = await login(phoneNumber, password );
    if(data.success === false){
      alert(data.message)
    }else{
// alert("✅ Đăng nhập thành công!");
    navigate("/home");
    }
    
  } catch (err) {
    setLoginStatus("❌ Đăng nhập thất bại, vui lòng kiểm tra lại.");
    alert(err.response.data.message)
    // console.error("Lỗi đăng nhập:", err);
  }
};

  return (
    <div className="bg-white w-[400px] mx-auto rounded-2xl shadow-md px-8 py-6 text-left mt-8">
      <h3 className="text-lg font-bold mb-6 text-center">Đăng nhập với mật khẩu</h3>

      {/* Số điện thoại */}
      <div className="mb-4">
        <div className="flex items-center border-b border-gray-300 py-2">
          <FiPhone className="text-gray-500 mr-2" />
          <span className="text-gray-700 mr-2">+84</span>
          <input
            type="text"
            placeholder="Số điện thoại"
            className="w-full outline-none bg-transparent"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
      </div>

      {/* Mật khẩu */}
      <div className="mb-4">
        <div className="flex items-center border-b border-gray-300 py-2">
          <FiLock className="text-gray-500 mr-2" />
          <input
            type="password"
            placeholder="Mật khẩu"
            className="w-full outline-none bg-transparent"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
      </div>

      {/* Nút đăng nhập */}
      <button
        onClick={handleLogin}
        className="w-full bg-[#61b3ff] hover:bg-[#429eff] text-white font-semibold py-2 rounded-md transition duration-200"
      >
        Đăng nhập với mật khẩu
      </button>

      {/* Trạng thái đăng nhập */}
      {loginStatus && <p className="text-center text-sm mt-4 text-[#0068ff] font-medium">{loginStatus}</p>}

      {/* Quên mật khẩu */}
      <div className="text-center mt-4">
        <a href="#" className="text-[#0068ff] text-sm hover:underline">
          Quên mật khẩu
        </a>
      </div>

      {/* Chuyển sang Đăng ký */}
      <div className="text-center mt-4">
        <Link to="/register" className="text-[#0068ff] font-semibold hover:underline">
          Đăng ký tài khoản
        </Link>
      </div>
    </div>
  );
}
