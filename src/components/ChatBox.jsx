import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageItem from "./MessageItem";

const ChatBox = () => {
  return (
    <div className="flex-1 flex flex-col bg-[#F1F2F4]">
      <ChatHeader />

      {/* Nội dung tin nhắn */}
      <div className="flex-1 px-6 py-4 overflow-y-auto">
        <MessageItem type="receiver" content="Còn nội dung..." time="08:19" />
        <MessageItem type="sender" content="ok ok" time="08:20" />
      </div>

      {/* Ô nhập tin nhắn */}
      <MessageInput />
    </div>
  );
};

export default ChatBox;
