
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Header from "../components/Shared/Header/Header";

jest.mock("../utils/custom_hooks/useOnlineStatus", () => ({
    __esModule: true,
    default: () => true,
}));

jest.mock("react-redux", () => ({
    useSelector: jest.fn((selector) => selector({ cart: { items: [] } })),
}));

it("renders the header heading", () => {
    render(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    );
    expect(screen.getByText("Flavor Story")).toBeInTheDocument();
});

it("renders the navigation links", () => {
    render(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
})  

it("renders the cart link with count", () => {
    render(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    );
    expect(screen.getByText("Cart")).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
});