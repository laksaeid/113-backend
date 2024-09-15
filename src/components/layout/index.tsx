import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-red-200">
        <header className="myContainer bg-red-500">
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
        </header>
      </div>
      <div className="flex-1 myContainer w-full">
        <Outlet />
      </div>
      <div className="bg-blue-200">
        <footer className="myContainer bg-blue-500">footer</footer>
      </div>
    </div>
  );
};

export default Layout;
