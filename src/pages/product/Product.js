import { Link, Outlet } from "react-router-dom";

export const Product = () => {

    return (
      <>
      <h2>PRODUCT</h2>
      <Link to="/products/form">Add Product</Link>
      </>
    )
  };