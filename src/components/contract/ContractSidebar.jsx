import React from "react";
import { AiOutlineUser, AiOutlineUsergroupAdd } from "react-icons/ai";
import { IoPersonAddOutline } from "react-icons/io5";
import SearchWithActions from "../SearchWithActions";

export default function ContractSidebar({ sizeIcon }) {
  return (
    <div className="w-[300px] h-full bg-white border-r overflow-y-auto">
      <SearchWithActions
        sizeIcon={sizeIcon}
        placeholder="Tìm kiếm"
        onAddPerson={() => console.log("Thêm người")}
        onAddGroup={() => console.log("Thêm nhóm")}
        onSearchChange={(e) => console.log("Đang tìm:", e.target.value)}
      />
      <ul className="text-sm text-gray-800 p-2 space-y-2">
        <li className="flex items-center gap-2 p-2 bg-blue-100 text-blue-600 rounded cursor-pointer">
          <AiOutlineUser size={18} />
          Danh sách bạn bè
        </li>
        <li className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
          <AiOutlineUsergroupAdd size={18} />
          Danh sách nhóm và cộng đồng
        </li>
        <li className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
          <IoPersonAddOutline size={18} />
          Lời mời kết bạn
        </li>
        <li className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
          <AiOutlineUsergroupAdd size={18} />
          Lời mời vào nhóm và cộng đồng
        </li>
      </ul>
    </div>
  );
}
