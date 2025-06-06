const Sidebar = () => {
  return (
    <div className="w-[70px] bg-[#0068FF] h-screen flex flex-col items-center py-4">
      {/* Avatar */}
      <button>
<img src="/avatar.png" alt="avatar" className="w-10 h-10 rounded-full mb-6" />
      </button>
      

      {/* Menu icons */}
      <div className="flex flex-col mt-7 justify-between h-full w-full items-center">
        {/* Top icons */}
        <div className="flex flex-col space-y-2 text-white text-2xl ">
           <button className="hover:bg-blue-500 p-2 rounded transition">
            <i className="fas fa-comment-alt"></i>
          </button>
          <button className="hover:bg-blue-500 p-2 rounded transition">
            <i className="fas fa-user-friends"></i>
          </button>
        </div>

        {/* Bottom icon */}
        <div className="text-white text-2xl mb-4">
           <button className="hover:bg-blue-500 p-2 rounded transition">
            <i className="fas fa-cog"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
