import React from "react";
//rrd
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";

//layouts
import Layout from "./components/layout";

//pages
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* 404 Not Found */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Layout>
      <Toaster />
    </Router>
  );
};

export default App;
