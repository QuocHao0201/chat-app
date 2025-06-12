import React, { useState, useEffect, useRef } from "react";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { RiContactsBook3Line } from "react-icons/ri";
import { IoMdCloudOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { PiToolboxLight } from "react-icons/pi";
import avatar from "../assets/avt.jfif";
import { useRecoilValue } from "recoil";
import { authState } from "../state/atom";
import ProfileModal from "../components/shared/modals/ProfileModal";

const Sidebar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dropdownRef = useRef(null);

  const loginResult = useRecoilValue(authState);

  const handleAvatarClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
              <div className="px-4 py-2 font-semibold">
                {loginResult?.account?.user?.fullName || "User"}
              </div>
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

      {/* PROFILE MODAL */}
      <ProfileModal
        show={showModal}
        onClose={handleCloseModal}
        userInfo={{
          fullName: loginResult?.account?.user?.fullName,
          gender: loginResult?.account?.user?.gender,
          dateOfBirth: loginResult?.account?.user?.dateOfBirth,
          phone: loginResult?.account?.phone,
        }}
      />
    </>
  );
};

export default Sidebar;
