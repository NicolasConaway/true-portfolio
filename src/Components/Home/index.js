import React from 'react';
import './styles.css'

class Home extends React.Component {

    render(){
        return(
            <>
                <div className="home__container">
                    <div className="title">
                        <h1 className="welcome">Welcome</h1>
                        <h1 className="to">To</h1>
                        <h1 className="nic"><span></span></h1>
                        <h1 className="portfolio">Portfolio</h1>
                    </div>
                </div>
            </>
        )
    }
}

export default Home