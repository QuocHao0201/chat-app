

export default function LoginErrorModal({ message, onClose }) {
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
