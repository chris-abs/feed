import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("HomePage", () => {
    it("render a home page", () => {
        render(<Home />);
        expect(screen.getByTestId("result")).toBeInTheDocument();
    })
})