import Sidebar from "../components/Sidebar";
import ChatList from "../components/ChatList";
import ChatBox from "../components/ChatBox";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const userName = location.state?.userName || "Người dùng";
  return (
    <div className="flex h-screen">
      <Sidebar />
      <ChatList userName={userName}sizeIcon={16} />
      <ChatBox />
    </div>
  );
};

export default Home;
