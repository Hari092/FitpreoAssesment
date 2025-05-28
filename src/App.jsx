import { useState } from "react";
import SideBar from "./components/SideBar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-blue-100 h-screen flex-1 flex justify-center items-center">
      <div className=" h-[calc(100dvh-1.5rem)] w-[calc(100vw-1.5rem)] rounded-3xl md:rounded-[3.5rem] p-2 bg-white flex">
        <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
    </div>
  );
}

export default App;
