import { CiSearch } from "react-icons/ci";
import { IoPersonAddOutline } from "react-icons/io5";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import TabNavigation from "./TabNavigation";
import Avatar from "./Avatar";
import avatar from "../assets/avt.jfif"

const ChatList = ({ userName, sizeIcon }) => {
  return (
    <div className="w-[300px] border border-gray-200 h-full overflow-y-auto bg-white">
      {/* Thanh tìm kiếm + nút thêm */}
      <div className="flex items-center gap-2 p-3">
        {/* Input tìm kiếm với icon */}
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg">
            <CiSearch />
          </span>
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="w-full bg-[#ebecf0] pl-9 pr-3 py-[6px] text-sm rounded-md focus:outline-none"
          />
        </div>

        {/* Nút thêm người */}
        <button className="hover:bg-[#ebecf0] p-2 rounded transition">
          <IoPersonAddOutline size={sizeIcon} />
        </button>
        <button className="hover:bg-[#ebecf0] p-2 rounded transition">
          <AiOutlineUsergroupAdd size={sizeIcon} />
        </button>
      </div>

      {/* Tabs */}
      <TabNavigation />

      {/* Danh sách tin nhắn */}
      <div className="mt-2 space-y-1">
        {/* Một item tin nhắn */}
        <div className="px-3 py-2 hover:bg-gray-100 flex items-center justify-between">
          {/* Bên trái: avatar + nội dung */}
          <div className="flex items-center space-x-2">
            <Avatar src={avatar}/>
            <div>
              <div className="font-semibold text-sm text-blue-900 flex items-center">
                Thầy Chung
              </div>
              <div className="text-xs text-gray-500">alo alo...</div>
            </div>
          </div>

          {/* Bên phải: thời gian + badge */}
          <div className="flex flex-col items-end space-y-1">
            <span className="text-xs text-gray-400">Vài giây</span>
            <span className="bg-red-600 text-white text-[10px] px-2 rounded-full">
              1
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
