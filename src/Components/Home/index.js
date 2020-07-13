import React from 'react';
import './styles.css'
import SnowVid from './SnowVid.mp4'

class Home extends React.Component {

    render() {
        return (
            <>

                <video autoPlay muted loop className="myVideo">
                    <source src={SnowVid} type="video/mp4" />
                </video>

                <div className="home__container">
                    <div className="title">
                        <h1 className="welcome">Welcome</h1>
                        <h1 className="to">To</h1>
                        <h1 className="nic"><span className="nameSpan"></span></h1>
                        <h1 className="portfolio">Portfolio</h1>
                    </div>

                    <div className="title2">
                        <h1 className="fullName">Nic Conaway</h1>
                        <h1 className="role">Front-End Desiner</h1>
                    </div>
                </div>
            </>
        )
    }
}

export default Home