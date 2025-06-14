import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import avatar from "../../../assets/avt.jfif";
import { useRecoilState } from "recoil";
import {
  formatDate,
  formatPhoneNumber,
  formatGender,
} from "../../../utils/formatters";
// import toast from "react-hot-toast";
import { authState } from "../../../state/auth/atoms";

const ProfileModal = ({ show, onClose }) => {
  const [auth, _setAuthState] = useRecoilState(authState);
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Lấy token từ authState chính xác
  const _token = auth.accessToken;

  // Lấy user info từ authState
  const user = auth.account.user;

  // Tách ngày sinh thành day/month/year (chuỗi dạng "YYYY-MM-DD" hoặc ISO)
  const [day, setDay] = useState(user.dateOfBirth.slice(8, 10));
  const [month, setMonth] = useState(user.dateOfBirth.slice(5, 7));
  const [year, setYear] = useState(user.dateOfBirth.slice(0, 4));

  const [fullName, setFullName] = useState(user.fullName);
  const [gender, setGender] = useState(user.gender);

  // Ẩn popup thành công sau 2.5 giây
  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  if (!show) return null;

  const handleUpdateProfile = async () => {
    // const updatedData = {
    //   fullName,
    //   gender,
    //   dateOfBirth: `${year}-${month}-${day}`, // format yyyy-mm-dd
    // };
    // try {
    //   const result = await updateUserProfile(updatedData, token);
    //   if (result && result._id) {
    //     // Cập nhật thành công
    //     setAuthState((prev) => ({
    //       ...prev,
    //       account: {
    //         ...prev.account,
    //         user: {
    //           ...prev.account.user,
    //           fullName,
    //           gender,
    //           dateOfBirth: `${year}-${month}-${day}`,
    //         },
    //       },
    //     }));
    //     setShowSuccess(true);
    //     setIsEditing(false);
    //   } else {
    //     toast.success("haha", {
    //       duration: 2000,
    //     });
    //   }
    // } catch (err) {
    //   alert(err.message || "Lỗi khi cập nhật");
    // }
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/10 backdrop-blur-sm flex justify-center items-center z-50"
        onClick={onClose}
      >
        <div
          className="relative bg-white rounded-md w-[420px] min-h-[450px] max-h-[90vh] h-auto overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {!isEditing ? (
            <motion.div
              key="view"
              initial={{ x: -420 }}
              animate={{ x: 0 }}
              exit={{ x: 420 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0 p-4"
            >
              <button
                onClick={onClose}
                className="absolute top-3 right-3 text-2xl text-gray-600 hover:text-black"
              >
                <IoClose />
              </button>

              <h2 className="text-lg font-semibold mb-4">Thông tin cá nhân</h2>

              <div className="flex flex-col items-center">
                <img
                  src={avatar}
                  alt="avatar"
                  className="w-20 h-20 rounded-full object-cover mb-2"
                />
                <h3 className="text-xl font-bold">{user.fullName}</h3>
              </div>

              <div className="mt-4">
                <div className="mb-2">
                  <label className="text-sm text-gray-600">Giới tính</label>
                  <div className="font-medium">{formatGender(user.gender)}</div>
                </div>

                <div className="mb-2">
                  <label className="text-sm text-gray-600">Ngày sinh</label>
                  <div className="font-medium">
                    {formatDate(user.dateOfBirth)}
                  </div>
                </div>

                <div className="mb-2">
                  <label className="text-sm text-gray-600">Điện thoại</label>
                  <div className="font-medium">
                    {formatPhoneNumber(auth.account.phone)}
                  </div>
                </div>

                <div className="text-xs text-gray-500 italic">
                  Chỉ bạn bè lưu số mới thấy được số này
                </div>

                <button
                  className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                  onClick={() => setIsEditing(true)}
                >
                  Cập nhật
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="edit"
              initial={{ x: 420 }}
              animate={{ x: 0 }}
              exit={{ x: 420 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0 p-4"
            >
              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={() => setIsEditing(false)}
                  className="text-blue-500 text-sm"
                >
                  ←
                </button>
                <h2 className="text-lg font-semibold">
                  Cập nhật thông tin cá nhân
                </h2>
                <IoClose
                  onClick={onClose}
                  className="text-2xl text-gray-600 hover:text-black cursor-pointer"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">Tên hiển thị</label>
                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full border px-3 py-2 rounded outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Giới tính</label>
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-1">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={gender === "male"}
                        onChange={() => setGender("male")}
                      />
                      Nam
                    </label>
                    <label className="flex items-center gap-1">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={gender === "female"}
                        onChange={() => setGender("female")}
                      />
                      Nữ
                    </label>
                    <label className="flex items-center gap-1">
                      <input
                        type="radio"
                        name="gender"
                        value="other"
                        checked={gender === "other"}
                        onChange={() => setGender("other")}
                      />
                      Khác
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-1">Ngày sinh</label>
                  <div className="flex gap-2">
                    <select
                      value={day}
                      onChange={(e) => setDay(e.target.value)}
                      className="border rounded px-2 py-1"
                    >
                      {[...Array(31)].map((_, i) => (
                        <option
                          key={i + 1}
                          value={String(i + 1).padStart(2, "0")}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </option>
                      ))}
                    </select>
                    <select
                      value={month}
                      onChange={(e) => setMonth(e.target.value)}
                      className="border rounded px-2 py-1"
                    >
                      {[...Array(12)].map((_, i) => (
                        <option
                          key={i + 1}
                          value={String(i + 1).padStart(2, "0")}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </option>
                      ))}
                    </select>
                    <select
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      className="border rounded px-2 py-1"
                    >
                      {Array.from({ length: 100 }, (_, i) => 2025 - i).map(
                        (y) => (
                          <option key={y} value={y}>
                            {y}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100"
                  >
                    Hủy
                  </button>
                  <button
                    onClick={handleUpdateProfile}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Cập nhật
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Hộp thông báo thành công kiểu popup */}
      {showSuccess && (
        <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-4 rounded-md flex items-center gap-3 z-60 shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>Cập nhật thông tin thành công</span>
        </div>
      )}
    </>
  );
};

export default ProfileModal;
