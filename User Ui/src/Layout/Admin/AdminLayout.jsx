import React from "react";
import SideBar from "./SideBar";
import AdminHeader from "./AdminHeader";

export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen  ">
      {/* Sidebar */}
      <div className="flex-none">
        <SideBar />
      </div>
      
      {/* Main Content */}
      <div className="flex flex-col w-full overflow-hidden">
        <div className="flex-none">
          <AdminHeader />
        </div>
        <div className="flex-1 overflow-y-scroll p-1 m-4 ">
          {children}
        </div>
      </div>
    </div>
  );
}
