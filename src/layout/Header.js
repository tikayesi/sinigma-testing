import { Button, Navbar, NavbarBrand } from "reactstrap"

const Header = ({bloc}) => {
  const {logoutSubmit} = bloc();
    return(
        <Navbar dark color="primary" className="shadow mb-4">
        <NavbarBrand className="mr-auto">SINIGMA</NavbarBrand>
        <Button color="danger" onClick={()=>logoutSubmit()}>Logout</Button>
      </Navbar>
    )
}

export default Header;