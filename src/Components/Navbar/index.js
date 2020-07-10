import React from 'react';
import './styles.css'

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
                        <li> Home </li>
                        <li>Projects</li>
                        <li>About Me</li>
                        <li>Contact Me</li>
                    </ul>
                </nav>


{/* onClick={() => this.setState({ isHamburgerClicked: false })} */}

            </>
        )
    }
}

export default Navbar