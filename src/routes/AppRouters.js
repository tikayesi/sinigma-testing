import { Outlet, Route, Routes } from "react-router-dom"
import { NotFoundPage } from "../layout/NonFoundPage"
import { Customer } from "../pages/customer/Customer"
import { Home } from "../pages/home/Home"
import ProductFormBloc from "../pages/product/bloc/ProductFormBloc"
import ProductListBloc from "../pages/product/bloc/ProductListBloc"
import { ProductForm } from "../pages/product/component/ProductForm"
import ProductList from "../pages/product/component/ProductList"

const AppRouters = () => {
  return(
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="products" element={<Outlet />}>
      <Route index element={<ProductList bloc={() => ProductListBloc()}/>}/>
       <Route path="form" element={<ProductForm bloc={() => ProductFormBloc()} />}/>
       <Route path="form/:id" element={<ProductForm bloc={() => ProductFormBloc()} />}/>
      </Route>
    <Route path="customers" element={<Customer />}>
    <Route path=":name" element={<Customer />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
  </Routes>
  )
}

export default AppRouters;