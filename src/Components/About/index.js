import React from 'react';
import './styles.css';
import Me from './nicolas_conaway.jpg'
import Download from './Files/ResumeNC.pdf'

class About extends React.Component {

    render() {
        return (
            <>
                <div className="background" />
                <div className="about">
                    <h1>About Me</h1>

                    <div className="about__container">
                        <img src={Me} alt="Nicolas Conaway" />

                        <div className="about__txt">
                            <p>Hello, my name is Nicolas Conaway. I am a Road to Hire student who's striving to become a front end developer. My strong points are spotting small bugs in front end and being able to research my way out of a road block.</p>
                            <div className="skills__container">
                                <div className="techSkills">
                                    <h4>Tech Skills</h4>
                                    <ul>
                                        <li>CSS</li>
                                        <li>HTML</li>
                                        <li>JavaScript</li>
                                        <li>React</li>
                                    </ul>
                                </div>

                                <div className="profSkills">
                                    <h4>Professional Skills</h4>
                                    <ul>
                                        <li>Agile</li>
                                        <li>Time Management</li>
                                        <li>Public Speaking</li>
                                        <li>Communication</li>
                                    </ul>
                                </div>
                            </div>

                            <a href={Download}
                                target="_blank"
                                rel="noopener noreferrer"
                                download>Download My Resume</a>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default About;