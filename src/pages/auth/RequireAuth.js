import {Navigate} from "react-router-dom";

const RequireAuth = ({children, redirectTo}) => {
    console.log(sessionStorage.getItem('token'));
    if (sessionStorage.getItem('token')) {
        return children
    } else {
        return <Navigate to={redirectTo}/>;
    }
}

export default RequireAuth;
