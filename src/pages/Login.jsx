import React from "react";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <div className="bg-[#e8f3ff] min-h-screen">
      <h1 className="text-3xl font-bold text-center text-[#0068ff]">Zalo</h1>
      <div className="text-center text-gray-600 mt-2">
        Đăng nhập để kết nối với ứng dụng Zalo Web
      </div>
      <LoginForm />
    </div>
  );
}
