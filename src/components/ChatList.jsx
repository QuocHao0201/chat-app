const ChatList = () => {
  return (
    <div className="w-[300px] border-r h-full overflow-y-auto bg-white">
      <div className="flex p-3 items-center">
        <input
          className="w-full p-2 border rounded-md mr-3"
          type="text"
          placeholder="Tìm kiếm"
        />
          <button className="hover:bg-blue-500 p-2 rounded transition">
            <i className="fas fa-user-plus"></i>
          </button>
          <button className="hover:bg-blue-500 p-2 rounded transition">
            <i className="fas fa-users"></i>
          </button>
      </div>

      {/* Tab Filter */}
      <div className="flex justify-between px-3 text-blue-600 font-medium">
        <button className="hover:bg-gray-300 border-b-2 border-blue-600 pb-1">Tất cả</button>
        <button className="hover:bg-gray-300 border-blue-600 pb-1">Chưa đọc</button>
        <button className="hover:bg-gray-300 border-blue-600 pb-1">Phân loại</button>
        
      </div>

      {/* Chat items */}
      <div className="mt-2 space-y-1">
        <div className="px-3 py-2 hover:bg-gray-100 flex items-center justify-between">
          <div>
            <div className="font-semibold">Cloud của tôi</div>
            <div className="text-xs text-gray-500">Bạn: 9</div>
          </div>
          <span className="text-xs text-gray-400">10 giờ</span>
        </div>

        {/* Chat được chọn */}
        <div className="px-3 py-2 bg-blue-100 flex items-center justify-between">
          <div>
            <div className="font-semibold text-blue-600">Võ Đình Chung</div>
            <div className="text-xs text-gray-500">Bạn: <i className="far fa-sticky-note"></i> Sticker</div>
          </div>
          <span className="text-xs text-gray-400">33 phút</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
