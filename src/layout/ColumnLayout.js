import { Col, Row } from "reactstrap";
import LoginBloc from "../pages/auth/bloc/LoginBloc";
import LoginService from "../pages/auth/service/LoginService";
import AppRouters from "../routes/AppRouters";
import Header from "./Header";
import Sidebar from "./Sidebar";

const ColumnLayout = () => {
    return(
        <>
         <Row>
          <Col sm="12" className="p-0">
            <Header bloc={()=>LoginBloc(LoginService)}/>
          </Col>
        </Row>
         <Row>
          <Col sm="4" md="3" lg="2" className="d-none d-sm-block">
            <Sidebar />
          </Col>
          <Col sm="8" md="9" lg="10">
            <AppRouters />
          </Col>
        </Row>
        </>
    );
}

export default ColumnLayout;