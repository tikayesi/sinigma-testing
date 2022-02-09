import { useNavigate } from "react-router-dom";

export const Home = () => {
    let navigate = useNavigate();
    return (
      <>
        <h2>Home</h2>;
        <button onClick={() => navigate("/customers/Tika")}>User</button>
      </>
    );
  };