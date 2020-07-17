import React from 'react';
import './styles.css';
import Linkedin from './icons/linkedin3.png'
import Github from './icons/github3.png'
import Email from './icons/email3.png'

const originalState = {
    name: "",
    email: "",
    phone: "",
    comments: "",
    nameError: "",
    emailError: "",
    phoneError: "",
    commentsError: ""
}

class Social extends React.Component {

    state = originalState;

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        });
    };

    validate = () => {
        let nameError = "";
        let emailError = "";
        let phoneError = "";
        let commentsError = "";

        if (!this.state.name) {
            nameError = 'Name must be included!'
        }
        if (!this.state.email.includes('@')) {
            emailError = 'Invalid email!';
        }
        if (!this.state.phone) {
            phoneError = 'Invalid phone number!'
        }
        if (!this.state.comments) {
            commentsError = 'Must include a message!'
        }

        if (emailError || nameError || phoneError || commentsError) {
            this.setState({ emailError, nameError, phoneError, commentsError });
            return false;
        }

        return true;
    };

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            this.setState(originalState);
        }
    }

    render() {
        return (
            <>
                <div className="background" />
                <div className="social">
                    <h1>Get in contact with me!</h1>

                    <div className="social__container">

                        <div className="form__container">
                            <form onSubmit={this.handleSubmit}>
                                <label for="name">Full Name:</label>
                                <input
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    id="name" />
                                <div className="errorMessage">{this.state.nameError}</div>

                                <label for="email">Email:</label>
                                <input
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    id="email" />
                                <div className="errorMessage">{this.state.emailError}</div>

                                <label for="phone">Cell Phone:</label>
                                <input
                                    name="phone"
                                    value={this.state.phone}
                                    onChange={this.handleChange}
                                    id="phone" />
                                <div className="errorMessage">{this.state.phoneError}</div>

                                <label for="comments">Comments:</label>
                                <textarea
                                    name="comments"
                                    value={this.state.comments}
                                    onChange={this.handleChange}
                                    id="comments"></textarea>
                                <div className="errorMessage">{this.state.commentsError}</div>

                                <div className="contact__button__container">
                                    <button type="submit" className="contact__button">Submit</button>
                                </div>
                            </form>
                        </div>

                        <div className="socialLinks__container">
                            <a href="https://www.linkedin.com/in/nicolas-conaway/"
                                className="socialLinks"
                                target="_blank"
                                rel="noopener noreferrer">
                                <img src={Linkedin} alt={Linkedin} />
                                <p>Linkedin</p>
                            </a>
                            <a href="https://github.com/NicolasConaway"
                                className="socialLinks"
                                target="_blank"
                                rel="noopener noreferrer">
                                <img src={Github} alt={Github} />
                                <p>Github</p>
                            </a>
                            <a href="mailto: n.conaway00@gmail.com"
                                className="socialLinks"
                                target="_blank"
                                rel="noopener noreferrer">
                                <img src={Email} alt={Email} />
                                <p>E-mail</p>
                            </a>
                        </div>
                    </div>


                </div>
            </>
        )
    }
}

export default Social;