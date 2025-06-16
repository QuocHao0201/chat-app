import Sidebar from "../components/Sidebar";

import { useRecoilValue } from "recoil";
import ChatBox from "../components/chat/ChatBox";
import ChatList from "../components/chat/ChatList";
import { authState, sideBarTabs } from "../state/auth/atoms";

const Home = () => {
  const loginResult = useRecoilValue(authState);
  const currentTab = useRecoilValue(sideBarTabs);

  return (
    <div className="flex h-screen">
      <Sidebar
        userName={loginResult.account.user.fullName}
        gender={loginResult.account.user.gender}
      />
      {currentTab == "chat" ? (
        <>
          <ChatList
            userName={loginResult.account.user.fullName}
            sizeIcon={16}
          />
          <ChatBox />
        </>
      ) : (
        <div className="text-lg">hihi</div>
      )}
    </div>
  );
};

export default Home;
