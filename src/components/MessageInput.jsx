const MessageInput = () => {
  return (
    <div className="p-3 border-t bg-white flex items-center space-x-2">
      <button className="hover:bg-blue-500 p-2 rounded transition">
      <i className="far fa-comment-dots text-xl"></i>
          </button>
          <button className="hover:bg-blue-500 p-2 rounded transition">
      <i className="far fa-image text-xl"></i>
          </button>
          <button className="hover:bg-blue-500 p-2 rounded transition">
      <i className="far fa-folder text-xl"></i>
          </button>
      <input
        type="text"
        placeholder="Nhập @, tin nhắn tới..."
        className="flex-1 p-2 border rounded-lg"
      />
      <button className="hover:bg-blue-500 p-2 rounded transition">
      <i className="far fa-smile text-xl"></i>
          </button>
          <button className="hover:bg-blue-500 p-2 rounded transition">
      <i className="far fa-thumbs-up text-xl"></i>
          </button>
    </div>
  );
};

export default MessageInput;
