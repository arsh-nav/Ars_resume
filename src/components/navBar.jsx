import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from "react-scroll";
import data from "../data.json";
import "../Css/fullpage.css";
export var nbar_class;
export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="navigation-bar">
        <Navbar
          light
          expand="md"
          style={{
            position: "fixed",
            backgroundColor: "Gold",
            minWidth: "100vw",
            opacity:'0.4',
            marginTop:'-10px',
            backgroundSize: 'cover',
            backgroundRepeat:'no-repeat',
            backgroundImage:'url("Images/Wall.jpg")',
            filter: 'alpha(opacity=50)'
          }}
        >
          <NavbarBrand>
            <img src="Images/themeColor.png" style={{ maxWidth: "20px" }} />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link
                  className="test6"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={0}
                >
                  <NavLink>About</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="test6"
                  to="Skills"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <NavLink>Skills</NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
