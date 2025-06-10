import React, { useState } from "react";

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("Tất cả");

  const tabs = ["Tất cả", "Chưa đọc"];

  return (
    <div className="flex px-3 font-medium">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`pb-1 px-2 border-b-2 transition 
            ${activeTab === tab
              ? "text-[#3d84e7] border-[#80b4ff]"
              : "text-[#9e9da5] border-transparent hover:bg-gray-300"
            }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
