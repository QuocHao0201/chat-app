// src/components/SearchWithActions.jsx
import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoPersonAddOutline } from "react-icons/io5";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

export default function SearchWithActions({
  placeholder = "Tìm kiếm",
  sizeIcon = 20,
  onAddPerson,
  onAddGroup,
  onSearchChange,
}) {
  return (
    <div className="flex items-center gap-2 p-3">
      {/* Input tìm kiếm với icon */}
      <div className="relative flex-1">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg">
          <CiSearch />
        </span>
        <input
          type="text"
          placeholder={placeholder}
          onChange={onSearchChange}
          className="w-full bg-[#ebecf0] pl-9 pr-3 py-[6px] text-sm rounded-md focus:outline-none"
        />
      </div>

      {/* Nút thêm người */}
      <button
        onClick={onAddPerson}
        className="hover:bg-[#ebecf0] p-2 rounded transition"
      >
        <IoPersonAddOutline size={sizeIcon} />
      </button>

      {/* Nút thêm nhóm */}
      <button
        onClick={onAddGroup}
        className="hover:bg-[#ebecf0] p-2 rounded transition"
      >
        <AiOutlineUsergroupAdd size={sizeIcon} />
      </button>
    </div>
  );
}
