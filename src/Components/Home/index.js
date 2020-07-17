import React from 'react';
import './styles.css'
import DesktopImage from './keyboard.jpg'
import PhoneImage from './keyboardPortrait.jpg'
import { Link } from 'react-router-dom';

class Home extends React.Component {

    render() {
        return (
            <>
                <img src={DesktopImage} alt={DesktopImage} className="wallpaper1" />
                <img src={PhoneImage} alt={PhoneImage} className="wallpaper2" />
                <div className="home__container">
                    <div className="title">
                        <h1 className="welcome">Welcome</h1>
                        <h1 className="to">To</h1>
                        <h1 className="nic"><span className="nameSpan"></span></h1>
                        <h1 className="portfolio">Portfolio</h1>
                    </div>

                    <div className="title2">
                        <h1 className="fullName">Nic Conaway</h1>
                        <h1 className="role">Front-End Designer</h1>
                    </div>
                </div>
                <div className="projectButton__wrapper">
                    <Link className="projectButton"
                    to="/projects">Take A Look At The Projects</Link>
                </div>
                
            </>
        )
    }
}

export default Home