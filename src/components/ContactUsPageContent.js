import React from "react";
import "./ContactUsPageContent.css";

class ContactUsPageContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contactUsContent: "Have questions or feedback? We'd love to hear from you!!",
            avatarURL: "",
            name: "",
            location: ""
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/SaiGanesh429");
        const userData = await data.json();
        this.setState({
            avatarURL: userData.avatar_url,
            name: userData.name,
            bio: userData.bio
        });
    }

    render() {
        return (
            <div>
                <h1>{this.props.contactUsTitle}</h1>
                <p>{this.state.contactUsContent}</p>
                <div>
                    <div>{this.state.avatarURL && <img className="avatar_image" src={this.state.avatarURL} alt={this.state.name} />}</div>
                    <div>{this.state.name}</div> -- <span>{this.state.bio}</span>
                </div>
            </div>

        )
    }
}

export default ContactUsPageContent;