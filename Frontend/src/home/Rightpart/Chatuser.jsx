import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import { CiMenuFries } from "react-icons/ci";

import profile from "../../../public/human.png"; // getting photo from public folder.

function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };

  return (
    <div className="relative flex items-center h-[10%] justify-center gap-4 bg-slate-800 hover:bg-slate-700 duration-300 rounded-md">
      {/* Hamburger Menu */}
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost drawer-button lg:hidden absolute left-5"
      >
        <CiMenuFries className="text-white text-xl" />
      </label>

      {/* Profile and Status */}
      <div className="flex space-x-3 items-center justify-center h-[10vh] bg-gray-800 hover:bg-gray-700 duration-300 px-4">
        <div className="avatar">
          <div className="w-12 h-12 rounded-full"> {/* Reduced size of the profile picture */}
            <img src={profile} alt="Profile" />
          </div>
        </div>
        <div>
          <h1 className="text-xl text-white">{selectedConversation.fullname}</h1>
          <span className="text-sm text-gray-400">
            {getOnlineUsersStatus(selectedConversation._id)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Chatuser;
