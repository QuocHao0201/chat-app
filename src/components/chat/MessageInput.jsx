import { LuSticker } from "react-icons/lu";
import { CiImageOn } from "react-icons/ci";
import { GiPaperClip } from "react-icons/gi";
import { PiIdentificationBadgeThin } from "react-icons/pi";
import { FaRegPenToSquare } from "react-icons/fa6";
import { TbMessage2Bolt } from "react-icons/tb";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { CiCrop } from "react-icons/ci"; // Circum Icons - cũng rất mảnh
import { FiEdit3 } from "react-icons/fi"; // Feather icon

const MessageInput = () => {
  return (
    <div className="flex flex-col p-3 border border-gray-200 bg-white space-y-2">
      {/* Tầng trên: 3 icon đầu */}
      <div className="flex space-x-2">
        <button className="hover:bg-blue-500 p-2 rounded transition">
          <LuSticker size={25} strokeWidth={1} />
        </button>
        <button className="hover:bg-blue-500 p-2 rounded transition">
          <CiImageOn size={25} />
        </button>
        <button className="hover:bg-blue-500 p-2 rounded transition">
          <GiPaperClip size={25} />
        </button>
        <button className="hover:bg-blue-500 p-2 rounded transition">
          <PiIdentificationBadgeThin size={25} />
        </button>
        <button className="hover:bg-blue-500 p-2 rounded transition">
          <CiCrop size={25} />
        </button>
        <button className="hover:bg-blue-500 p-2 rounded transition">
          <FaRegPenToSquare size={25} />
        </button>
        <button className="hover:bg-blue-500 p-2 rounded transition">
          <TbMessage2Bolt size={25} />
        </button>
        <button className="hover:bg-blue-500 p-2 rounded transition">
          <IoEllipsisHorizontal size={25} />
        </button>
      </div>

      {/* Tầng dưới: input và 2 icon cuối */}
      <div className="flex items-center border border-gray-200 bg-white rounded-full px-4 py-2 shadow-sm">
        <input
          type="text"
          placeholder="Nhập @, tin nhắn tới..."
          className="flex-1 outline-none bg-transparent text-sm text-gray-700 placeholder:text-gray-400"
        />
        <button className="hover:bg-gray-100 p-2 rounded-full transition">
          <i className="far fa-smile text-xl text-blue-500"></i>
        </button>
        <button className="hover:bg-gray-100 p-2 rounded-full transition">
          <i className="far fa-thumbs-up text-xl text-yellow-500"></i>
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
