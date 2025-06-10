import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { IoVideocamOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { AiOutlineBars } from "react-icons/ai";


import avatar from "../assets/avt.jfif";
import Avatar from "./Avatar";

const ChatHeader = () => {
  return (
    <div className="h-[60px] border border-gray-200 flex items-center px-4 justify-between bg-white">
      <div className="flex items-center justify-center space-x-2">
        <Avatar src={avatar} alt="avatar" size={50}/>
        <span className="font-semibold">Huỳnh Quốc Hào</span>
      </div>
      <div className="space-x-3 text-gray-600 text-xl">
        <button className="hover:bg-[#ebecf0] p-2 rounded transition">
          <AiOutlineUsergroupAdd size={20} />
        </button>
        <button className="hover:bg-[#ebecf0] p-2 rounded transition">
          <IoVideocamOutline />
        </button>
        <button className="hover:bg-[#ebecf0] p-2 rounded transition">
          <CiSearch/>
        </button>
        <button className="hover:bg-[#ebecf0] p-2 rounded transition">
          <AiOutlineBars/>
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
