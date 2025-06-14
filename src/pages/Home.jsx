import Sidebar from "../components/Sidebar";

import { useRecoilValue } from "recoil";
import ChatBox from "../components/chat/ChatBox";
import ChatList from "../components/chat/ChatList";
import { authState } from "../state/auth/atoms";

const Home = () => {
  const loginResult = useRecoilValue(authState);

  return (
    <div className="flex h-screen">
      <Sidebar
        userName={loginResult.account.user.fullName}
        gender={loginResult.account.user.gender}
      />
      <ChatList userName={loginResult.account.user.fullName} sizeIcon={16} />
      <ChatBox />
    </div>
  );
};

export default Home;
