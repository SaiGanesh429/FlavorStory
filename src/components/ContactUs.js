import { Component } from "react";
import ContactUsPageContent from "./ContactUsPageContent";
// import DefaultContexts from "../utils/custom_contexts/default_contexts";




class ContactUs extends Component {

  constructor() {
    console.log("parent Props")
    super();
  }

  componentDidMount() {
    console.log("Parent component Did mount")
  }

  render() {
    console.log("parent Render");

    return (
      <>
        {/* <DefaultContexts.Consumer>
          {(data) => (
            <div className="context-info">
              <p>Logged in user: {data?.loggedInUser || "Guest"}</p>
            </div>
          )}
        </DefaultContexts.Consumer> */}

        <ContactUsPageContent contactUsTitle={"Contact Us"} />
      </>
    );
  }
}

export default ContactUs;