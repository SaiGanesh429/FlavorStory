import React from "react";
import "./ContactUsPageContent.css";

const supportChannels = [
    { title: "Call Support", detail: "+91 98765 43210", icon: "📞", subtitle: "Available 24/7 for orders and urgent concerns" },
    { title: "Email Us", detail: "support@flavorstory.com", icon: "✉️", subtitle: "Best for partnerships, refunds, and detailed feedback" },
    { title: "Visit Our HQ", detail: "24, Spice Street, Bengaluru", icon: "📍", subtitle: "Open daily from 10 AM to 10 PM" },
];

const helpTopics = [
    "Order issues and refunds",
    "Delivery delays and missing items",
    "Restaurant or partner onboarding",
    "Careers, internships, and vendor support",
    "Menu suggestions and food quality feedback",
];

class ContactUsPageContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactUsContent: "Have questions or feedback? We would love to hear from you.",
            avatarURL: "",
            name: "",
            bio: "",
            location: "",
        };
    }

    componentDidMount() {
        if (typeof window === "undefined") return;
        if (process.env.NODE_ENV === "test") {
            this.setState({
                avatarURL: "https://avatars.githubusercontent.com/u/109084168?v=4",
                name: "Sai Ganesh",
                bio: "Developer",
                location: "Hyderabad, India",
            });
            return;
        }

        fetch("https://api.github.com/users/SaiGanesh429")
            .then((response) => response.json())
            .then((userData) => {
                this.setState({
                    avatarURL: userData.avatar_url,
                    name: userData.name || "Sai Ganesh",
                    bio: userData.bio || "Developer",
                    location: "Hyderabad, India",
                });
            })
            .catch(() => {
                this.setState({
                    avatarURL: "",
                    name: "",
                    bio: "",
                    location: "",
                });
            });
    }

    render() {
        return (
            <div className="contact-page-shell">
                <section className="contact-hero">
                    <div className="hero-copy">
                        <p className="eyebrow">Flavor Story Support</p>
                        <h1>{this.props.contactUsTitle}</h1>
                        <p className="hero-text">
                            From seamless deliveries to premium restaurant partnerships, our team is here to make every experience smooth and memorable.
                        </p>
                        <div className="hero-badges">
                            <span>24/7 Customer Care</span>
                            <span>Fast Response</span>
                            <span>Live Order Support</span>
                        </div>
                    </div>

                    <div className="hero-card">
                        <h3>Need help with an order?</h3>
                        <p>Track your delivery, manage your account, or share feedback in minutes.</p>
                        <button type="button">Start a chat</button>
                    </div>
                </section>

                <section className="contact-grid">
                    <div className="support-card main-card">
                        <div className="section-heading">
                            <p className="eyebrow">Reach our team</p>
                            <h2>We’re always a tap away</h2>
                        </div>
                        <div className="channel-list">
                            {supportChannels.map((channel) => (
                                <div key={channel.title} className="channel-item">
                                    <div className="channel-icon">{channel.icon}</div>
                                    <div>
                                        <h3>{channel.title}</h3>
                                        <p>{channel.detail}</p>
                                        <span>{channel.subtitle}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="support-card profile-card">
                        <div className="profile-badge">Customer Success</div>
                        {this.state.avatarURL ? (
                            <img src={this.state.avatarURL} alt={this.state.name || "contact profile"} className="avatar_image" />
                        ) : (
                            <div className="avatar_placeholder">🍽️</div>
                        )}
                        <h3>{this.state.name || "Flavor Story Team"}</h3>
                        <p>{this.state.bio || "We help customers, partners, and restaurants grow together."}</p>
                        <span>{this.state.location || "Hyderabad, India"}</span>
                    </div>
                </section>

                <section className="details-grid">
                    <div className="detail-card">
                        <h3>Popular help topics</h3>
                        <ul>
                            {helpTopics.map((topic) => (
                                <li key={topic}>{topic}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="detail-card">
                        <h3>What to include in the contact section</h3>
                        <p>Successful food apps usually include support channels, order assistance, partnerships, careers, and a clear feedback path. This page combines all of those into one modern experience.</p>
                        <div className="stat-row">
                            <div>
                                <strong>4.9/5</strong>
                                <span>Customer rating</span>
                            </div>
                            <div>
                                <strong>15 min</strong>
                                <span>Avg response</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="contact-form-card">
                    <div className="section-heading">
                        <p className="eyebrow">Tell us more</p>
                        <h2>Share your feedback or request</h2>
                    </div>
                    <form className="contact-form">
                        <div className="form-row">
                            <input type="text" placeholder="Your name" />
                            <input type="email" placeholder="Email address" />
                        </div>
                        <div className="form-row">
                            <select defaultValue="">
                                <option value="" disabled>Choose a topic</option>
                                <option>Order issue</option>
                                <option>Partner with us</option>
                                <option>Career enquiry</option>
                                <option>General feedback</option>
                            </select>
                        </div>
                        <textarea rows="4" placeholder="Tell us how we can help..."></textarea>
                        <button type="submit">Send message</button>
                    </form>
                </section>
            </div>
        );
    }
}

export default ContactUsPageContent;