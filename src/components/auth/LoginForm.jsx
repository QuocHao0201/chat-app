import React, { useState, useEffect } from "react";
import { FiPhone, FiLock } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";

import PhoneValidate from "../../utils/PhoneValidate";
import PasswordValidate from "../../utils/PasswordValidate";
import LoginErrorModal from "../shared/modals/LoginErrorModal";
import { authState, loginParamsState } from "../../state/auth/atoms";
import { loginSelector } from "../../state";

export default function LoginForm() {
  // recoil global states
  const setLoginState = useSetRecoilState(loginParamsState);
  const loginResult = useRecoilValueLoadable(loginSelector);
  const setLoginResult = useSetRecoilState(authState);

  // local component states
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loginStatusMessage, setLoginStatusMessage] = useState("");
  const [showModalLoginError, setShowModalLoginError] = useState(false);
  const [modalMessageLoginError, setModalMessageLoginError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const newErrors = {};

    // Validate số điện thoại
    if (!PhoneValidate(phoneNumber)) {
      newErrors.phoneNumber = "❌ Số điện thoại không hợp lệ";
    }

    // Validate mật khẩu
    if (!PasswordValidate(password)) {
      newErrors.password = "❌ Mật khẩu không hợp lệ";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoginStatusMessage("Vui lòng thử lại.");
      return;
    }

    setErrors({});
    setLoginStatusMessage("");
    setLoginState({
      phoneNumber,
      password,
    });
  };

  useEffect(() => {
    switch (loginResult.state) {
      case "hasValue":
        if (loginResult.contents) {
          setLoginResult(loginResult.contents);
          navigate("/home");
        }
        break;
      case "hasError":
        setModalMessageLoginError(loginResult.contents?.message);
        setShowModalLoginError(true);
        setLoginStatusMessage("Vui lòng thử lại.");
    }
  }, [loginResult, navigate, setLoginResult]);

  return (
    <>
      <div className="bg-white w-[400px] mx-auto rounded-2xl shadow-md px-8 py-6 text-left mt-8">
        <h3 className="text-lg font-bold mb-6 text-center">
          Đăng nhập với mật khẩu
        </h3>

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
          {loginResult.state === "loading" ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : (
            "Đăng nhập với mật khẩu"
          )}
        </button>

        {/* Thông báo lỗi */}
        {loginStatusMessage && (
          <p className="text-center text-sm mt-4 text-red-500 font-medium">
            {loginStatusMessage}
          </p>
        )}

        {/* Quên mật khẩu */}
        <div className="text-center mt-4">
          <Link
            to="/forgot-password"
            className="text-[#0068ff] text-sm hover:underline"
          >
            Quên mật khẩu?
          </Link>
        </div>

        {/* Chuyển sang đăng ký */}
        <div className="text-center mt-4">
          <Link
            to="/register"
            className="text-[#0068ff] font-semibold hover:underline"
          >
            Đăng ký tài khoản
          </Link>
        </div>
      </div>

      {/* Modal lỗi */}
      {showModalLoginError && (
        <LoginErrorModal
          message={modalMessageLoginError}
          onClose={() => setShowModalLoginError(false)}
        />
      )}
    </>
  );
}
