import { Outlet } from "react-router-dom";
import Sidebar from "./layout/Sidebar/Sidebar";
import Header from "./layout/Header/Header";
import { Suspense } from "react";

const MainLayout = () => {
  return (
    <div className="flex justify-between h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-50 ml-68">
        <div>
          <Header />
        </div>

        <main className="h-full bg-white flex-1 p-4">
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-full">
                Loading...
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
