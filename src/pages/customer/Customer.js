import { useParams } from "react-router-dom";

export const Customer = () => {
    let params = useParams();
    return <h1>My Name {params.name}</h1>;
  };