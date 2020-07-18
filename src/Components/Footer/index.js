import React from 'react';
import './styles.css'

import FooterLinkedin from '../Contact/icons/linkedin3.png'
import FooterGithub from '../Contact/icons/github3.png'

class Footer extends React.Component {

    render() {
        return (
            <>
                <footer className="footer">
                    <div className="footerText">
                        <p>7/17/2020</p>
                        <p>Copyright © 2020 All Rights Reserved.</p>
                    </div>
                    
                    <div className="footerLinks">
                        <a href="https://www.linkedin.com/in/nicolas-conaway/"
                                target="_blank"
                                rel="noopener noreferrer">
                            <img src={FooterLinkedin} alt={FooterLinkedin} />
                        </a>
                        <a href="https://github.com/NicolasConaway"
                                target="_blank"
                                rel="noopener noreferrer">
                            <img src={FooterGithub} alt={FooterGithub} />
                        </a>
                    </div>
                </footer>
            </>
        )
    }
}

export default Footer