import React, { useState, useCallback, useEffect } from "react";
import { FiPhone, FiLock } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import throttle from "lodash.throttle";
import {
  useRecoilState,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";

import PhoneValidate from "../../utils/PhoneValidate";
import PasswordValidate from "../../utils/PasswordValidate";
import { login } from "../../api/auth/login";
import {
  authState,
  loginSelector,
  loginStateAtom,
  passwordAtom,
  phoneAtom,
} from "../../state/atom";
import LoginErrorModal from "../../components/shared/modals/LoginErrorModal";

export default function LoginForm() {
  const [phoneNumber, setPhoneNumber] = useRecoilState(phoneAtom);
  const [password, setPassword] = useRecoilState(passwordAtom);
  const [isLoginStatus, setIsLoginStatus] = useRecoilState(loginStateAtom);
  const loginResult = useRecoilValueLoadable(loginSelector);
  const [errors, setErrors] = useState({});
  const [loginStatusMessage, setLoginStatusMessage] = useState("");
  const [showModalLoginError, setShowModalLoginError] = useState(false);
  const [modalMessageLoginError, setModalMessageLoginError] = useState("");

  const setLoginResult = useSetRecoilState(authState);
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

    setIsLoginStatus(true);

    if (loginResult.state == "hasValue") {
      setLoginResult(dataLogin.data);
      navigate("/home");
    }

    // try {
    //   const dataLogin = await login(phoneNumber, password);

    //   if (!dataLogin.success) {
    //     setModalMessageLoginError(dataLogin.message);
    //     setShowModalLoginError(true);
    //     setLoginStatusMessage("Vui lòng thử lại.");
    //   } else {
    //     setLoginResult(dataLogin.data); // Lưu dữ liệu đăng nhập vào Recoil
    //     navigate("/home");
    //   }
    // } catch (err) {
    //   setModalMessageLoginError(
    //     err.response?.data?.message || "❌ Đăng nhập thất bại!"
    //   );
    //   setShowModalLoginError(true);
    //   setLoginStatusMessage("Vui lòng thử lại.");
    // }
  };
  useEffect(() => {
    switch (loginResult.state) {
      case "hasValue":
        console.log("[login content]", loginResult.contents);
        setLoginResult(loginResult.contents?.data);
        // navigate("/home");
        setIsLoginStatus(false);
      case "loading":
        setIsLoginStatus(false);
        return;
      case "hasError":
        setIsLoginStatus(false);
        console.log("[login content]", loginResult.errorMaybe);
    }
  }, [loginResult]);

  const throttledHandleLogin = useCallback(
    throttle(() => {
      handleLogin();
    }, 3000),
    [phoneNumber, password]
  );

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
          onClick={throttledHandleLogin}
          className="w-full bg-[#61b3ff] hover:bg-[#429eff] text-white font-semibold py-2 rounded-md transition duration-200"
        >
          Đăng nhập với mật khẩu
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
