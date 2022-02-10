import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import { NotFoundPage } from "./layout/NonFoundPage";
import { Customer } from "./pages/customer/Customer";
import { Home } from "./pages/home/Home";
import { ProductForm } from "./pages/product/component/ProductForm";
import { Product } from "./pages/product/Product";

export const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">Enigmacamp</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/products">Product</Link>
                </li>
                <li className="nav-item">
                  <Link to="/customers">Customer</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Outlet />}>
            <Route index element={<Product/>}/>
             <Route path="form" element={<ProductForm />}/>
             <Route path=":id" element={<Product />}/>
          <Route path="form" element={<ProductForm />}/>
            </Route>
          <Route path="customers" element={<Customer />}>
          <Route path=":name" element={<Customer />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
};

