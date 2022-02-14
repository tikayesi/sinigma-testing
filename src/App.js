import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import ColumnLayout from "./layout/ColumnLayout";
import Sidebar from "./layout/Sidebar";
import { Login } from "./pages/auth/Login";
import RequireAuth from "./pages/auth/RequireAuth";
import AppRouters from "./routes/AppRouters";

export const App = () => {
  return (
    <Router>
      <div>
       {/* <Sidebar/>
        <AppRouters/> */}
        <Routes>
          <Route index element={<Login/>}/>
          <Route path="/protected/*" element={<RequireAuth redirectTo={"/"}>
          <ColumnLayout/>
          </RequireAuth>}/>
        </Routes>
      </div>
    </Router>
  );
};

