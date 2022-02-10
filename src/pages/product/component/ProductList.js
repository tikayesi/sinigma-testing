import { Link, useParams } from "react-router-dom";

export const ProductList = () => {
  let params = useParams();
    return (
      <>
      <h2>PRODUCT</h2>
      <h3>Product id: {params.id}</h3>
      <Link to="form">Add Product</Link>
      <Link to="forms">Add Product</Link>
      </>
    )
  };