import Sidebar from "../components/Sidebar";
import ChatList from "../components/ChatList";
import ChatBox from "../components/ChatBox";

const Home = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <ChatList />
      <ChatBox />
    </div>
  );
};

export default Home;
