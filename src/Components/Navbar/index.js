import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

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
                        <Link to="/" 
                        onClick={() => this.setState({ isHamburgerClicked: false })}
                        className="link">
                             Home
                        </Link>

                        <Link to="/projects"
                        onClick={() => this.setState({ isHamburgerClicked: false })}
                        className="link">
                            Projects
                        </Link>

                        <Link to="/aboutme"
                        onClick={() => this.setState({ isHamburgerClicked: false })}
                        className="link">
                            About Me
                        </Link>

                        <Link to="/contact"
                        onClick={() => this.setState({ isHamburgerClicked: false })}
                        className="link">
                            Contact Me
                        </Link>

                    </ul>
                </nav>


                {/* onClick={() => this.setState({ isHamburgerClicked: false })} */}

            </>
        )
    }
}

export default Navbar