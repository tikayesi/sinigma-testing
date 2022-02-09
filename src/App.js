import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

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
          <Route path="/product" element={<Product />} />
          <Route path="/customers" element={<Customer />} />
          <Route path="/customers/:name" element={<Customer />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => {
  let navigate = useNavigate();
  return (
    <>
      <h2>Home</h2>;
      <button onClick={() => navigate("/customers/Tika")}>User</button>
    </>
  );
};

const Product = () => {
  return <h2>About</h2>;
};

const Customer = () => {
  let params = useParams();
  return <h1>My Name {params.name}</h1>;
};
