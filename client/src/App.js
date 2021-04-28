import React, { useState } from "react";
import "./App.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="App">
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Twitter Showcase</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem></NavItem>
            </Nav>
            <NavLink href="https://github.com/shrki416">GitHub</NavLink>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default App;
