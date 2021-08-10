import React from "react";
import { Navbar, Container } from "react-bootstrap";

const navbarStype = {
  backgroundColor: "lightblue",
};

const Header = (props) => {
  return (
    <Navbar style={navbarStype} variant="light">
      <Container>
        <Navbar.Brand href="/">{props.title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
