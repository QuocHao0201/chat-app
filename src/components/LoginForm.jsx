import React, { useState } from "react";
import { FiPhone, FiLock } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import PhoneValidate from "../utils/PhoneValidate";
import PasswordValidate from "../utils/PasswordValidate";
import { login } from "../api/auth/login";

// ✅ Modal hiển thị lỗi
function Modal({ message, onClose }) {
  return (
    <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
        <p className="text-red-600 text-sm font-medium mb-4">{message}</p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-[#0068ff] text-white rounded-md hover:bg-[#0050cc] transition"
        >
          Đóng
        </button>
      </div>
    </div>
  );
}

export default function LoginForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loginStatus, setLoginStatus] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    const newErrors = {};

    // ✅ Validate
    if (!PhoneValidate(phoneNumber)) {
      newErrors.phoneNumber = "❌ Số điện thoại không hợp lệ";
    }

    if (!PasswordValidate(password)) {
      newErrors.password = "❌ Mật khẩu không hợp lệ";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoginStatus("Vui lòng thử lại.");
      return;
    }

    setErrors({});
    setLoginStatus(""); // Reset trước khi gửi

    try {
      const data = await login(phoneNumber, password);

      if (data.success === false) {
        setModalMessage(data.message);
        setShowModal(true);
        setLoginStatus("Vui lòng thử lại.");
      } else {
        console.log(data);
        navigate("/home", { state: { userName: data.account.user.fullName } });
      }
    } catch (err) {
      setModalMessage(err.response?.data?.message || "❌ Đăng nhập thất bại!");
      setShowModal(true);
      setLoginStatus("Vui lòng thử lại.");
    }
  };

  return (
    <>
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
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
          )}
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
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        {/* Nút đăng nhập */}
        <button
          onClick={handleLogin}
          className="w-full bg-[#61b3ff] hover:bg-[#429eff] text-white font-semibold py-2 rounded-md transition duration-200"
        >
          Đăng nhập với mật khẩu
        </button>

        {/* Hiển thị lỗi dưới nút */}
        {loginStatus && (
          <p className="text-center text-sm mt-4 text-red-500 font-medium">
            {loginStatus}
          </p>
        )}

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

      {/* Modal lỗi */}
      {showModal && (
        <Modal
          message={modalMessage}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
  