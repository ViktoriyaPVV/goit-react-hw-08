
import { Suspense } from "react";
import AppBar from "./AppBar/AppBar";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Outlet />
      <Suspense fallback={null}>{children}</Suspense>
    </>
  );
};

export default Layout;
