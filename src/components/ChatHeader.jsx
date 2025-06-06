const ChatHeader = () => {
  return (
    <div className="h-[60px] border-b flex items-center px-4 justify-between bg-white">
      <div className="flex items-center space-x-2">
        <button><img src="/avatar.png" className="w-10 h-10 rounded-full" /></button>
        <span className="font-semibold">Huỳnh Quốc Hào</span>
      </div>
      <div className="space-x-3 text-gray-600 text-xl">
        <button className="hover:bg-blue-500 p-2 rounded transition">
          <i className="fas fa-users"></i>
          </button>
        <button className="hover:bg-blue-500 p-2 rounded transition">
 <i className="fas fa-video"></i>
          </button>
        <button className="hover:bg-blue-500 p-2 rounded transition">
        <i className="fas fa-search"></i>

          </button>
        <button className="hover:bg-blue-500 p-2 rounded transition">
        <i className="fas fa-window-restore"></i>
          </button>
        
       
      </div>
    </div>
  );
};

export default ChatHeader;
