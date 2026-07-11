import React from "react";
import "./ContactUsPageContent.css";

class ContactUsPageContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contactUsContent: "Have questions or feedback? We'd love to hear from you!!",
            avatarURL: "",
            name: "",
            bio: "",
            location: ""
        }
    }

    componentDidMount() {
        if (typeof window === "undefined") return;
        if (process.env.NODE_ENV === "test") {
            this.setState({
                avatarURL: "https://avatars.githubusercontent.com/u/109084168?v=4",
                name: "Sai Ganesh",
                bio: "Developer"
            });
            return;
        }

        fetch("https://api.github.com/users/SaiGanesh429")
            .then((response) => response.json())
            .then((userData) => {
                this.setState({
                    avatarURL: userData.avatar_url,
                    name: userData.name,
                    bio: userData.bio
                });
            })
            .catch(() => {
                this.setState({
                    avatarURL: "",
                    name: "",
                    bio: ""
                });
            });
    }

    render() {
        return (
            <div>
                <h1 className ="w-70 bg-green-600">{this.props.contactUsTitle}</h1>
                <p>{this.state.contactUsContent}</p>
                <div>
                    <div>{this.state.avatarURL && <img className="w-30 h-30 rounded-full" src={this.state.avatarURL} alt={this.state.name} />}</div>
                    <div>{this.state.name}</div> -- <span>{this.state.bio}</span>
                </div>
            </div>
        )
    }
}

export default ContactUsPageContent;