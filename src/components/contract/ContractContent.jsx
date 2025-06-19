import React from "react";

const friends = [
  { name: "À Phú St", avatar: "https://via.placeholder.com/40" },
  { name: "a sang", avatar: "https://via.placeholder.com/40" },
  { name: "a2", avatar: "https://via.placeholder.com/40" },
  { name: "Andy Nguyen", avatar: "https://via.placeholder.com/40" },
  { name: "Anh Thư", avatar: "https://via.placeholder.com/40" },
  { name: "Âu Thanh Cường", avatar: "https://via.placeholder.com/40" },
];

export default function ContractContent() {
  return (
    <div className="flex-grow">
      <div className="px-6 py-4 border-b">
        <h2 className="text-xl font-semibold">Danh sách bạn bè</h2>
      </div>

      <div className="p-4">
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Tìm bạn"
            className="flex-1 border rounded px-3 py-2 text-sm"
          />
          <select className="border rounded px-2 text-sm">
            <option>Tên (A-Z)</option>
            <option>Tên (Z-A)</option>
          </select>
          <select className="border rounded px-2 text-sm">
            <option>Tất cả</option>
            <option>Đang hoạt động</option>
          </select>
        </div>

        <div className="space-y-3">
          {friends.map((friend, index) => (
            <div
              key={index}
              className="flex items-center justify-between hover:bg-gray-100 rounded px-3 py-2 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <img
                  src={friend.avatar}
                  alt="avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span>{friend.name}</span>
              </div>
              <span className="text-gray-400 text-xl">⋯</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
