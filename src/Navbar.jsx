import Container from "react-bootstrap/Container";
import {Nav, Navbar, Button} from "react-bootstrap";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" className="bg-danger">
        <Container>
          <img src="Logo.png" alt="" />
          <Nav className="mx-auto">
            <Nav.Link
              className="text-black fw-semibold fs-6 text-white"
              href="#home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="text-black fw-semibold fs-6 text-white"
              href="#features"
            >
              Features
            </Nav.Link>
            <Nav.Link
              className="text-black fw-semibold fs-6 text-white"
              href="#pricing"
            >
              Pricing
            </Nav.Link>
            <Nav.Link
              className="text-black fw-semibold fs-6 text-white"
              href="#about"
            >
              About
            </Nav.Link>
            <Nav.Link
              className="text-black fw-semibold fs-6 text-white"
              href="#service"
            >
              Service
            </Nav.Link>
          </Nav>
          <Button variant="outline-light">Login</Button>
        </Container>
      </Navbar>
    </>
  );
}

{
  /* <div className="navbar">
        <div className="container">
        <div className="navitems">
          <img src="Logo.png" alt="" />
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
          <button className="navBtn">CONTACT</button>
        </div>
        </div>
      </div> */
}

export default ColorSchemesExample;
