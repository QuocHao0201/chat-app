import React, { useState, useEffect, useRef } from "react";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { RiContactsBook3Line } from "react-icons/ri";
import { IoMdCloudOutline } from "react-icons/io";
import { IoSettingsOutline, IoClose } from "react-icons/io5";
import { PiToolboxLight } from "react-icons/pi";
import avatar from "../assets/avt.jfif";

const Sidebar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dropdownRef = useRef(null);

  const handleAvatarClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Close dropdown when click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        isDropdownOpen
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <>
      {/* SIDEBAR */}
      <div className="w-[70px] bg-[#0068FF] h-screen flex flex-col items-center py-4 relative">
        {/* Avatar */}
        <div className="relative" ref={dropdownRef}>
          <img
            src={avatar}
            alt="avatar"
            className="rounded-full cursor-pointer border-2 border-white object-cover"
            style={{ width: 60, height: 60 }}
            onClick={handleAvatarClick}
          />

          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div className="absolute top-[0] left-[65px] w-60 bg-white shadow-lg rounded-md py-2 z-50">
              <div className="px-4 py-2 font-semibold">Huỳnh Quốc Hào</div>
              <hr />
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => {
                  setShowModal(true);
                  setDropdownOpen(false);
                }}
              >
                Hồ sơ của bạn
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                Cài đặt
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                Đăng xuất
              </button>
            </div>
          )}
        </div>

        {/* Menu icons */}
        <div className="flex flex-col justify-between h-full w-full items-center">
          {/* Top icons */}
          <div className="flex flex-col space-y-2 text-white text-2xl mt-4">
            <button className="hover:bg-[#0043a8] p-2 rounded transition">
              <BiSolidMessageRoundedDetail size={30} />
            </button>
            <button className="hover:bg-[#0043a8] p-2 rounded transition">
              <RiContactsBook3Line size={30} />
            </button>
          </div>

          {/* Bottom icons */}
          <div className="flex flex-col items-center text-white text-2xl mb-4 space-y-2">
            <button className="hover:bg-[#0043a8] p-2 rounded transition">
              <IoMdCloudOutline size={30} />
            </button>
            <button className="hover:bg-[#0043a8] p-2 rounded transition">
              <PiToolboxLight size={30} />
            </button>
            <button className="hover:bg-[#0043a8] p-2 rounded transition">
              <IoSettingsOutline size={30} />
            </button>
          </div>
        </div>
      </div>

      {/* MODAL: Thông tin tài khoản */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-md w-[400px] p-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-2xl text-gray-600 hover:text-black"
            >
              <IoClose />
            </button>

            <div className="mb-4">
              <h2 className="text-lg font-semibold">Thông tin tài khoản</h2>
            </div>

            <div className="flex flex-col items-center">
              <img
                src={avatar}
                alt="avatar"
                className="w-20 h-20 rounded-full object-cover mb-2"
              />
              <h3 className="text-xl font-bold">Huỳnh Quốc Hào</h3>
            </div>

            <div className="mt-4">
              <div className="mb-2">
                <label className="text-sm text-gray-600">Giới tính</label>
                <div className="font-medium">Nam</div>
              </div>

              <div className="mb-2">
                <label className="text-sm text-gray-600">Ngày sinh</label>
                <div className="font-medium">02 tháng 01, 2002</div>
              </div>

              <div className="mb-2">
                <label className="text-sm text-gray-600">Điện thoại</label>
                <div className="font-medium">+84 355 112 561</div>
              </div>

              <div className="text-xs text-gray-500 italic">
                Chỉ bạn bè có lưu số của bạn trong danh bạ máy xem được số này
              </div>

              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Cập nhật
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
