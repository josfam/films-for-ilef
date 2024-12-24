import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="flex h-auto w-full items-center justify-center overflow-y-scroll bg-sky-950 px-14 pb-12 pt-12">
      <Outlet />
    </main>
  );
};

export default MainLayout;
