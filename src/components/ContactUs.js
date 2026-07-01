import {Component} from "react";
import ContactUsPageContent from "./ContactUsPageContent";


class ContactUs extends Component {

  constructor() {
    console.log("parent Props")
    super();
  }

  componentDidMount() {
    console.log( "Parent component Did mount")
  }

  render() {
    console.log("parent Render");

    return (
      <>
         < ContactUsPageContent contactUsTitle={"Contact Us"} />
      </>
    )
    
  }
}

export default ContactUs;