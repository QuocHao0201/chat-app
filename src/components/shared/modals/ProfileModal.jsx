import React from "react";
import { IoClose } from "react-icons/io5";
import avatar from "../../../assets/avt.jfif";
import { useRecoilValue } from "recoil";
import { authState } from "../../../state/atom";
import { formatDate, formatPhoneNumber, formatGender } from "../../../utils/formatters";

const ProfileModal = ({show,onClose}) => {
  const loginResult = useRecoilValue(authState);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-black/10 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-md w-[400px] p-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-2xl text-gray-600 hover:text-black"
        >
          <IoClose />
        </button>

        <div className="mb-4">
          <h2 className="text-lg font-semibold">Thông tin cá nhân</h2>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={avatar}
            alt="avatar"
            className="w-20 h-20 rounded-full object-cover mb-2"
          />
          <h3 className="text-xl font-bold">{loginResult.account.user.fullName}</h3>
        </div>

        <div className="mt-4">
          <div className="mb-2">
            <label className="text-sm text-gray-600">Giới tính</label>
            <div className="font-medium">{formatGender(loginResult.account.user.gender)}</div>
          </div>

          <div className="mb-2">
            <label className="text-sm text-gray-600">Ngày sinh</label>
            <div className="font-medium">{formatDate(loginResult.account.user.dateOfBirth)}</div>
          </div>

          <div className="mb-2">
            <label className="text-sm text-gray-600">Điện thoại</label>
            <div className="font-medium">{formatPhoneNumber(loginResult.account.phone)}</div>
          </div>

          <div className="text-xs text-gray-500 italic">
            Chỉ có bạn bè lưu số của bạn vào danh ba mới thấy số này
          </div>

          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Cập nhật
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
