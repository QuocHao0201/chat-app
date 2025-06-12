import React from "react";

export default function ModalOTP({ onClose, onConfirm, onResend, otp, setOtp, registerStatus, otpError }) {
  const handleChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value.slice(-1);
    setOtp(newOtp);
    if (e.target.nextSibling && e.target.value) {
      e.target.nextSibling.focus();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm text-center">
        <h3 className="text-lg font-bold mb-2 text-[#0068ff]">Nhập mã xác nhận</h3>

        {registerStatus && (
          <p className="text-sm text-green-600 mb-2">{registerStatus}</p>
        )}

        {otpError && (
          <p className="text-sm text-red-600 font-medium mb-2">{otpError}</p>
        )}

        <div className="flex justify-center gap-2 mb-4">
          {otp.map((digit, idx) => (
            <input
              key={idx}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, idx)}
              className="w-10 h-10 text-center text-lg border border-gray-300 rounded-md outline-none"
            />
          ))}
        </div>

        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={onResend}
            className="text-sm text-blue-600 hover:underline"
          >
            Gửi lại mã
          </button>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={onConfirm}
            className="bg-[#0068ff] text-white px-4 py-2 rounded-md hover:bg-[#0050cc]"
          >
            Xác nhận
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400"
          >
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
}
