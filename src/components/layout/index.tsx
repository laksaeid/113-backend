import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="bg-red-200">
        <header className="myContainer bg-red-500">
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
        </header>
      </div>

      {children}
      <div className="bg-blue-200">
        <footer className="myContainer bg-blue-500">footer</footer>
      </div>
    </>
  );
};

export default Layout;
