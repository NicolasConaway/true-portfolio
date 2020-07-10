import React from 'react';
import './styles.css';
import Me from './nicolas_conaway.jpg'
import Download from './Files/ResumeNC.pdf'

class About extends React.Component {

    render() {
        return (
            <>

                <div className="about">
                    <h1>About Me</h1>
                    <img src={Me} alt="Nicolas Conaway" />
                    <p>Hello, my name is Nicolas Conaway. I am a Road to Hire student who's striving to become a front end developer. My strong points are spotting small bugs in front end and being able to research my way out of a road block.</p>
                    <a href= {Download}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    download>Download My Resume</a>
                </div>

            </>
        )
    }
}

export default About;