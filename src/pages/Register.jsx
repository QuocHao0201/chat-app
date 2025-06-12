import React from "react";
import RegisterForm from "../components/registerComponents/RegisterForm";

export default function Register() {
  return (
    <div className="bg-[#e8f3ff] min-h-screen">
      <h1 className="text-3xl font-bold text-center text-[#0068ff]">Zalo</h1>
      <div className="text-center text-gray-600 mt-2">
        Tạo tài khoản Zalo để kết nối với ứng dụng Zalo Web
      </div>
      <RegisterForm />
    </div>
  );
}
