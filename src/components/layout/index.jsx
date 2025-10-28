import React from "react";

import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import Header from "./Header";

const Layout = ({ children }) => {
  const location = useLocation();

  // Hide Navbar/Footer for auth routes & other dashboard routes
  const hideLayout = location.pathname === "/404";

  return (
    <div>
      {!hideLayout && <Header />}
      <main>{children}</main>
      {!hideLayout && <Footer />}
    </div>
  );
};

export default Layout;
