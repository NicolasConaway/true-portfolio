import React from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {

    state = {
        isHamburgerClicked: false,
    }

    render() {

        const hamburgerClicked = this.state.isHamburgerClicked;

        return (
            <>
                <div className="hamburger__container">
                    <div className="hamburgerFold"
                        onClick={() => this.setState({ isHamburgerClicked: !hamburgerClicked })}>
                        <div className={hamburgerClicked ? "toggleTopLine" : "topLine"} />
                        <div className={hamburgerClicked ? "toggleMiddleLine" : "middleLine"} />
                        <div className={hamburgerClicked ? "toggleBottomLine" : "bottomLine"} />
                    </div>
                </div>


                <nav className={hamburgerClicked ? "hideNavbar navbar" : "hideNavbar"}>
                    <ul>
                        <NavLink to="/"
                            onClick={() => this.setState({ isHamburgerClicked: false })}
                            className="link"
                            exact
                            activeClassName="selected">
                            Home
                        </NavLink>

                        <NavLink to="/projects"
                            onClick={() => this.setState({ isHamburgerClicked: false })}
                            className="link"
                            activeClassName="selected">
                            Projects
                        </NavLink>

                        <NavLink to="/aboutme"
                            onClick={() => this.setState({ isHamburgerClicked: false })}
                            className="link"
                            activeClassName="selected">
                            About Me
                        </NavLink>

                        <NavLink to="/contact"
                            onClick={() => this.setState({ isHamburgerClicked: false })}
                            className="link"
                            activeClassName="selected">
                            Contact Me
                        </NavLink>

                    </ul>
                </nav>


                {/* onClick={() => this.setState({ isHamburgerClicked: false })} */}

            </>
        )
    }
}

export default Navbar