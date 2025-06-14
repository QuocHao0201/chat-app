import React, { useState } from "react";
import ModalOTP from "../shared/modals/ModalOTP";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1); // 1: Nhập email, 2: Nhập OTP, 3: Đặt mật khẩu
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpError, setOtpError] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSendOTP = async () => {
    if (!email.includes("@")) return alert("Vui lòng nhập email hợp lệ!");

    // try {
    //   await requestResetPassword(email); // Gửi OTP qua email thật
    //   setStep(2);
    //   setRegisterStatus("Mã OTP đã được gửi đến email");
    //   setOtp(["", "", "", "", "", ""]);
    //   setOtpError("");
    // } catch (error) {
    //   alert("Gửi OTP thất bại. Email không tồn tại hoặc lỗi hệ thống.");
    // }
  };

  const handleConfirmOTP = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp === "123456") {
      setStep(3);
    } else {
      setOtpError("Mã OTP không đúng");
    }
  };

  const handleResendOTP = () => {
    setRegisterStatus("Mã xác minh đã được gửi lại");
    setOtp(["", "", "", "", "", ""]);
    setOtpError("");
  };

  const handleResetPassword = () => {
    if (newPassword.length < 6) {
      setPasswordError("Mật khẩu phải từ 6 ký tự trở lên");
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError("Mật khẩu xác nhận không khớp");
      return;
    }

    // Gọi API cập nhật mật khẩu ở đây
    alert("Đổi mật khẩu thành công!");
    setStep(1);
    setEmail("");
    setNewPassword("");
    setConfirmPassword("");
    setPasswordError("");
  };

  return (
    <div className="bg-white w-[400px] mx-auto rounded-2xl shadow-md px-8 py-6 text-left mt-8">
      {step === 1 && (
        <>
          <input
            type="email"
            placeholder="Nhập email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex items-center border-b border-gray-300 py-2 mb-4 w-full outline-none bg-transparent"
          />
          <button
            onClick={handleSendOTP}
            className="w-full bg-[#0068ff] text-white py-2 rounded-md hover:bg-[#0050cc]"
          >
            Gửi mã xác nhận
          </button>
        </>
      )}

      {step === 3 && (
        <>
          <input
            type="password"
            placeholder="Mật khẩu mới"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="flex items-center border-b border-gray-300 py-2 mb-4 w-full outline-none bg-transparent"
          />
          <input
            type="password"
            placeholder="Nhập lại mật khẩu"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="flex items-center border-b border-gray-300 py-2 mb-4 w-full outline-none bg-transparent"
          />
          {passwordError && (
            <p className="text-sm text-red-600 font-medium">{passwordError}</p>
          )}
          <button
            onClick={handleResetPassword}
            className="w-full bg-[#0068ff] text-white py-2 rounded-md hover:bg-[#0050cc]"
          >
            Đặt lại mật khẩu
          </button>
        </>
      )}

      {step === 2 && (
        <ModalOTP
          otp={otp}
          setOtp={setOtp}
          onClose={() => setStep(1)}
          onResend={handleResendOTP}
          onConfirm={handleConfirmOTP}
          registerStatus={registerStatus}
          otpError={otpError}
        />
      )}
    </div>
  );
}
