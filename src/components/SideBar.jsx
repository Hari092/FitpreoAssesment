import React from "react";
import NavBar from "./NavBar";
import { MENU_ITEMS } from "../constants/SideBarConstants";
import { Menu, X } from "lucide-react";

const SideBar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      <div className=" flex items-center justify-between h-10 p-2 lg:hidden ">
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Menu className="h-6 w-6" />
        </button>
        <div className="flex items-center px-2 lg:px-11 py-10 ">
          <span className="text-xl font-bold">
            <span className="text-cyan-400">Health</span>
            <span className="text-gray-800">care.</span>
          </span>
        </div>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-transparent bg-opacity-10 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed inset-y-0 left-0 z-30  bg-blue-100 backdrop-opacity-100 h-full shadow-lg transform transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:static lg:inset-0 flex justify-center items-center
          ${
            sidebarOpen
              ? "translate-x-0 roundedr-l-3xl w-56  z-50"
              : "-translate-x-full roundedr-l-3xl rounded-xl flex  items-center md:rounded-l-[3.5rem] w-64"
          }
        `}
      >
        <div className="flex flex-col   h-[calc(95dvh)] lg:h-[calc(90dvh-2rem)] lg:max-h-[calc(90dvh-2rem)]">
          <div className="lg:flex items-center px-6 lg:py-4 hidden">
            <span className="text-xl font-bold">
              <span className="text-cyan-400">Health</span>
              <span className="text-gray-800">care.</span>
            </span>
          </div>

          <nav className="flex-1 px-4 lg:py-6 lg:space-y-2">
            <div className="lg:mb-6 relative lg:block">
              <NavBar title={"General"} navArr={MENU_ITEMS["general"]} />
              <X
                onClick={() => setSidebarOpen(false)}
                className=" absolute top-2 -right-7 lg:hidden"
              />
            </div>

            <div>
              <NavBar title={"Tools"} navArr={MENU_ITEMS["tools"]} />
            </div>
          </nav>

          <div className="px-4 py-4 ">
            <a
              href="#"
              className=" py-2 text-balance font-semibold  text-gray-600 transition-colors gap-5 flex cursor-pointer items-center"
            >
              <span className="mr-3">⚙️</span>
              Setting
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
