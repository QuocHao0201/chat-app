import ForgotPasswordForm from "../components/auth/ForgotPasswordForm";

export default function ForgotPassword() {
  return (
    <div className="bg-[#e8f3ff] min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-center text-[#0068ff]">Zalo</h1>
      <div className="text-center text-gray-600 mt-2 mb-6">
        Nhập số email để khôi phục mật khẩu Zalo Web
      </div>
      <ForgotPasswordForm />
    </div>
  );
}
