import React from "react";
import "./ContactUsPageContent.css";

class ContactUsPageContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
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
                <h1>{this.props.contactUsTitle} - Contact Us -Count = {this.state.count}</h1>
                <p>{this.state.contactUsContent}</p>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    });
                }}>Count</button>
                <div>
                    <div>{this.state.name}</div>
                    <div>{this.state.avatarURL && <img className="avatar_image"  src={this.state.avatarURL} alt={this.state.name} />}</div>
                    <div>{this.state.bio}</div>
                </div>
            </div>

        )
    }
}

export default ContactUsPageContent;