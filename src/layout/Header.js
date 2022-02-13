import { Navbar, NavbarBrand } from "reactstrap"

const Header = () => {
    return(
        <Navbar dark color="primary" className="shadow mb-4">
        <NavbarBrand className="mr-auto">SINIGMA</NavbarBrand>
      </Navbar>
    )
}

export default Header;