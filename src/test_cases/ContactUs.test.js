import { render, screen } from "@testing-library/react";
import ContactUs from "../components/ContactUs/ContactUs";
import "@testing-library/jest-dom";

test("renders the contact page heading", () => {
    render(<ContactUs />);
    const heading = screen.getByText("Contact Us");
    expect(heading).toBeInTheDocument();
});


test("should have load the image profile", () => {
    render(<ContactUs />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://avatars.githubusercontent.com/u/109084168?v=4"); 
});