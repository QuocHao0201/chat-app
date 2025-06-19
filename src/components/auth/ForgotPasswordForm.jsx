import React, { useState } from "react";
import ModalOTP from "../shared/modals/ModalOTP";
import AuthService from "../../api/auth/authService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const authService = new AuthService();

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [authOTP, setAuthOTP] = useState("");
  const [otpError, setOtpError] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOTP = async () => {
    if (!email.includes("@")) return alert("Vui lòng nhập email hợp lệ!");

    try {
      await authService.requestResetPassword(email);
      setStep(2);
      setStatusMessage("Mã OTP đã được gửi đến email");
      setOtp(["", "", "", "", "", ""]);
      setOtpError("");
    } catch (error) {
      alert("Gửi OTP thất bại. Email không tồn tại hoặc lỗi hệ thống.");
    }
  };

  const handleConfirmOTP = async () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length !== 6) {
      return setOtpError("Vui lòng nhập đủ 6 chữ số");
    }

    try {
      setIsLoading(true);
      const res = await authService.verifyOTP(email, enteredOtp);

      if (res?.statusCode === 200) {
        setAuthOTP(enteredOtp);
        setOtpError("");
        setStep(3);
      } else {
        setOtpError("Mã OTP không hợp lệ hoặc đã hết hạn");
      }
    } catch (err) {
      setOtpError(err.response?.data?.message || "Xác minh OTP thất bại");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    try {
      await authService.resendOTP(email);
      setStatusMessage("Mã xác minh đã được gửi lại");
      setOtp(["", "", "", "", "", ""]);
      setOtpError("");
    } catch {
      alert("Gửi lại OTP thất bại.");
    }
  };

  const handleResetPassword = async () => {
    if (newPassword.length < 6) {
      return setPasswordError("Mật khẩu phải từ 6 ký tự trở lên");
    }

    if (newPassword !== confirmPassword) {
      return setPasswordError("Mật khẩu xác nhận không khớp");
    }

    try {
      await authService.resetPassword({
        email,
        authOTP,
        newPassword,
      });

      toast.success("Đặt lại mật khẩu thành công!");
      navigate("/");
    } catch (error) {
      setPasswordError(
        error.response?.data?.message ||
          "Đặt lại mật khẩu thất bại. Vui lòng kiểm tra OTP hoặc thử lại."
      );
    }
  };

  return (
    <div className="bg-white w-[400px] mx-auto rounded-2xl shadow-md px-8 py-6 text-left mt-8">
      {step === 1 && (
        <>
          <h2 className="text-lg font-semibold mb-4">Quên mật khẩu</h2>
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

      {step === 2 && (
        <ModalOTP
          otp={otp}
          setOtp={setOtp}
          onClose={() => setStep(1)}
          onResend={handleResendOTP}
          onConfirm={handleConfirmOTP}
          registerStatus={statusMessage}
          otpError={otpError}
          isLoading={isLoading}
        />
      )}

      {step === 3 && (
        <>
          <h2 className="text-lg font-semibold mb-4">Đặt lại mật khẩu</h2>
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
            <p className="text-sm text-red-600 font-medium mb-2">
              {passwordError}
            </p>
          )}
          <button
            onClick={handleResetPassword}
            className="w-full bg-[#0068ff] text-white py-2 rounded-md hover:bg-[#0050cc]"
          >
            Đặt lại mật khẩu
          </button>
        </>
      )}
    </div>
  );
}
