import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginBloc = (loginService) => {
  const { login, logout } = loginService();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginSubmit = async (event) => {
      event.preventDefault()
    try {
      let body = {
        username: username,
        password: password,
      };
      let res = await login(body);
      console.log("res ", res.data);
      const dataToken = res.data.token;
      sessionStorage.setItem("token", dataToken);
      console.log("sesion token", sessionStorage.getItem("token"));
      console.log("token: " + dataToken);
      navigate("/protected", { replace: true });
    } catch (e) {
      alert("Username atau password salah!");
    }
  };

  const logoutSubmit = async () => {
    try{
        await logout();
        sessionStorage.removeItem("token")
        navigate("/")
    } catch (e) {
        console.log(e);
    }
  }

  const handleusername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return {
    handleusername,
    handlePassword,
    loginSubmit,
    logoutSubmit
  };
};

export default LoginBloc;
