import Sidebar from "../components/Sidebar";

import { useRecoilValue } from "recoil";
import { authState } from "../state/atom";
import ChatBox from "../components/chatComponents/ChatBox";
import ChatList from "../components/chatComponents/ChatList";

const Home = () => {
  const loginResult = useRecoilValue(authState)
  
  return (
    <div className="flex h-screen">
      <Sidebar userName={loginResult.account.user.fullName} gender={loginResult.account.user.gender}/>
      <ChatList userName={loginResult.account.user.fullName}sizeIcon={16} />
      <ChatBox />
    </div>
  );
};

export default Home;
