import { Link, Outlet, Route, Routes, useParams } from "react-router-dom";
import { NotFoundPage } from "../../layout/NonFoundPage";
import { ProductForm } from "./component/ProductForm";
import { ProductList } from "./component/ProductList";

export const Product = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<ProductList />} />
        <Route path="form" element={<ProductForm />} />
        <Route path=":id" element={<ProductList />} />
        <Route path="form" element={<ProductForm />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
