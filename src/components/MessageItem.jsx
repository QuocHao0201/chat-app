const MessageItem = ({ type, content, time }) => {
  const isSender = type === "sender";
  return (
    <div className={`flex ${isSender ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`p-2 rounded-xl max-w-xs ${
          isSender ? "bg-blue-100 text-black" : "bg-white"
        }`}
      >
        {content}
        <div className="text-xs text-gray-500 mt-1 text-right">{time}</div>
      </div>
    </div>
  );
};

export default MessageItem;
