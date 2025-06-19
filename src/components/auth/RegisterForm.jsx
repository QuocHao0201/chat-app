import React, { useEffect, useState } from "react";
import { FiPhone, FiLock } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import PhoneValidate from "../../utils/PhoneValidate";
import PasswordValidate from "../../utils/PasswordValidate";
import FullNameValidate from "../../utils/FullNameValidate";
import GenderValidate from "../../utils/GenderValidate";
import DateOfBirthValidate from "../../utils/DateOfBirthValidate";
import EmailValidate from "../../utils/EmailValidate";
import ModalOTP from "../shared/modals/ModalOTP";

import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { sendOTPSelector, signUpSelector } from "../../state";
import {
  authState,
  otpParamsState,
  signUpParamsState,
} from "../../state/auth/atoms";
import LoginErrorModal from "../shared/modals/LoginErrorModal";

export default function RegisterForm() {
  const setSendOTPParams = useSetRecoilState(otpParamsState);
  const sendOTPResult = useRecoilValueLoadable(sendOTPSelector);

  const setSignUpParmas = useSetRecoilState(signUpParamsState);
  const signUpResult = useRecoilValueLoadable(signUpSelector);

  const setLoginResult = useSetRecoilState(authState);
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    password: "",
    gender: "",
    dateOfBirth: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [registerStatus, setRegisterStatus] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpError, setOtpError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    const newErrors = {};

    if (!FullNameValidate(form.fullName))
      newErrors.fullName = "❌ Họ tên không hợp lệ";
    if (!PhoneValidate(form.phone))
      newErrors.phone = "❌ Số điện thoại không hợp lệ";
    if (!PasswordValidate(form.password))
      newErrors.password = "❌ Mật khẩu không hợp lệ";
    if (!GenderValidate(form.gender))
      newErrors.gender = "❌ Vui lòng chọn giới tính";
    if (!DateOfBirthValidate(form.dateOfBirth))
      newErrors.dateOfBirth = "❌ Vui lòng chọn ngày sinh";
    if (!EmailValidate(form.email)) newErrors.email = "❌ Email không hợp lệ";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSendOTPParams(form.email);
  };

  useEffect(() => {
    if (sendOTPResult.state == "hasError") {
      setModalMessage(
        sendOTPResult.contents?.message || "❌ Gửi OTP thất bại!"
      );
      setShowModal(true);
      setSendOTPParams("");
    } else if (sendOTPResult.state == "hasValue" && sendOTPResult.contents) {
      setRegisterStatus("✅ Mã OTP đã được gửi đến email.");
      setShowOTPModal(true);
      setSendOTPParams("");
    }
  }, [sendOTPResult]);

  useEffect(() => {
    if (signUpResult.state == "hasError") {
      setOtpError(signUpResult.contents.message || "❌ Xác minh OTP thất bại!");
      setShowModal(true);
      setSignUpParmas(null);
    } else if (signUpResult.state == "hasValue" && signUpResult.contents) {
      setLoginResult(signUpResult.contents);
      setSignUpParmas(null);
      navigate("/home");
    }
  }, [signUpResult]);

  const handleConfirmOTP = async () => {
    const enteredOTP = otp.join("");

    if (enteredOTP.length !== 6) {
      setOtpError("❌ Vui lòng nhập đầy đủ 6 số OTP!");
      return;
    }

    const payload = { ...form, authOTP: enteredOTP };
    setSignUpParmas(payload);
  };

  return (
    <>
      <div className="bg-white w-[400px] mx-auto rounded-2xl shadow-md px-8 py-6 text-left mt-8">
        <h3 className="text-lg font-bold mb-6 text-center">
          Tạo tài khoản Zalo
        </h3>

        <div className="mb-4">
          <input
            type="text"
            name="fullName"
            placeholder="Họ và tên"
            value={form.fullName}
            onChange={handleChange}
            className="w-full border-b border-gray-300 py-2 outline-none bg-transparent"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName}</p>
          )}
        </div>

        <div className="mb-4">
          <div className="flex items-center border-b border-gray-300 py-2">
            <FiPhone className="text-gray-500 mr-2" />
            <span className="text-gray-700 mr-2">+84</span>
            <input
              type="text"
              name="phone"
              placeholder="Số điện thoại"
              value={form.phone}
              onChange={handleChange}
              className="w-full outline-none bg-transparent"
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border-b border-gray-300 py-2 outline-none bg-transparent"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <div className="flex items-center border-b border-gray-300 py-2">
            <FiLock className="text-gray-500 mr-2" />
            <input
              type="password"
              name="password"
              placeholder="Mật khẩu"
              value={form.password}
              onChange={handleChange}
              className="w-full outline-none bg-transparent"
            />
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

        <div className="mb-4">
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className="w-full border-b border-gray-300 py-2 outline-none bg-transparent"
          >
            <option value="">Chọn giới tính</option>
            <option value="male">Nam</option>
            <option value="female">Nữ</option>
            <option value="other">Khác</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            type="date"
            name="dateOfBirth"
            value={form.dateOfBirth}
            onChange={handleChange}
            className="w-full border-b border-gray-300 py-2 outline-none bg-transparent"
          />
          {errors.dateOfBirth && (
            <p className="text-red-500 text-sm">{errors.dateOfBirth}</p>
          )}
        </div>

        <button
          onClick={handleRegister}
          className="w-full bg-[#61b3ff] hover:bg-[#429eff] text-white font-semibold py-2 rounded-md transition duration-200"
        >
          {sendOTPResult.state == "loading" ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : (
            "Đăng ký tài khoản"
          )}
        </button>

        <div className="text-center mt-4">
          <Link to="/" className="text-[#0068ff] font-semibold hover:underline">
            Quay lại đăng nhập
          </Link>
        </div>
      </div>

      {showModal && (
        <LoginErrorModal
          message={modalMessage}
          onClose={() => setShowModal(false)}
        />
      )}
      {showOTPModal && (
        <ModalOTP
          otp={otp}
          setOtp={setOtp}
          onClose={() => {
            setShowOTPModal(false);
            setOtpError("");
          }}
          onConfirm={handleConfirmOTP}
          onResend={() => setSendOTPParams(form.email)}
          registerStatus={registerStatus}
          otpError={otpError}
          isLoading={signUpResult.state == "loading"}
        />
      )}
    </>
  );
}
