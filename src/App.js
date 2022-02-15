import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import ColumnLayout from "./layout/ColumnLayout";
import { NotFoundPage } from "./layout/NonFoundPage";
import Sidebar from "./layout/Sidebar";
import LoginBloc from "./pages/auth/bloc/LoginBloc";
import { Login } from "./pages/auth/component/Login";
import RequireAuth from "./pages/auth/RequireAuth";
import LoginService from "./pages/auth/service/LoginService";
import AppRouters from "./routes/AppRouters";

export const App = () => {
  return (
    <Router>
      <div>
       {/* <Sidebar/>
        <AppRouters/> */}
        <Routes>
          <Route index element={<Login bloc={() => LoginBloc(LoginService)}/>}/>
          <Route
          path="/protected/*"
          element={<RequireAuth redirectTo="/">
                    <ColumnLayout/>
          </RequireAuth>}
          />
          <Route path="/*" element={<NotFoundPage/>}/>
        </Routes>
      </div>
    </Router>
  );
};

