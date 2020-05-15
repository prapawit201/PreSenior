import React, { useState, Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
class navbar extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/library" className="nav-link">
                Library
              </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
          {/* </Collapse> */}
        </Navbar>
        {/* //test */}
      </div>
    );
  }
}
export default withRouter(navbar);
