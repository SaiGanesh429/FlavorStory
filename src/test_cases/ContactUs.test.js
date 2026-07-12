import { render, screen } from "@testing-library/react";
import ContactUs from "../components/ContactUs/ContactUs";
import "@testing-library/jest-dom";

test("renders the contact page heading", () => {
    render(<ContactUs />);
    const heading = screen.getByText("Contact Us");
    expect(heading).toBeInTheDocument();
});

test("renders the contact profile image when available", () => {
    render(<ContactUs />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image.getAttribute("src")).toContain("avatars");
});