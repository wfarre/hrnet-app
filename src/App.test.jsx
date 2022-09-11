import { fireEvent, render, screen } from "@testing-library/react";

import App from "./App";

import { LocationDisplay } from "./App";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

describe("I am on the home page", () => {
  it("should displya the main titles", () => {
    const route = "/";

    render(
      <MemoryRouter initialEntries={[route]}>
        <App />
        <LocationDisplay />
      </MemoryRouter>
    );

    const title = screen.getByText("HRnet");
    const subTitle = screen.getByText("Create Employee");

    expect(title).toBeTruthy();
    expect(title).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
  });
  describe("When I click on the save button", () => {
    it("Should open the modal with employee created", async () => {
      const route = "/";

      render(
        <MemoryRouter initialEntries={[route]}>
          <App />
        </MemoryRouter>
      );

      expect(screen.getByTestId("location-display")).toHaveTextContent(route);

      const save = screen.getByTestId("save-btn");
      const modal = screen.getByTestId("modal");
      expect(save).toBeInTheDocument();
      expect(modal.className).toContain("hidden");

      fireEvent.click(save);
      expect(modal.className).not.toContain("hidden");
      expect(modal).toBeVisible();
    });
  });
  describe("when I click on the button 'view current employees'", () => {
    it("should go to the page of the current employees", async () => {
      const route = "/";

      render(
        <MemoryRouter initialEntries={[route]}>
          <App />
        </MemoryRouter>
      );

      expect(screen.getByTestId("location-display")).toHaveTextContent(route);

      const btnEmployees = screen.getByTestId("btn-employees");

      fireEvent.click(btnEmployees);

      expect(screen.getByTestId("location-display")).toHaveTextContent(
        "/current-employees"
      );
    });
  });
});

describe("I am on the employee table page", () => {
  it("should displya the main title", () => {
    const route = "/current-employees";

    render(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    );

    const title = screen.getByText("Current Employees");
    expect(title).toBeInTheDocument();
  });
  describe("when I click on the button 'home'", () => {
    it("should redirect to the home page to create a new employee", async () => {
      const route = "/current-employees";

      render(
        <MemoryRouter initialEntries={[route]}>
          <App />
          {/* <LocationDisplay /> */}
        </MemoryRouter>
      );

      expect(screen.getByTestId("location-display")).toHaveTextContent(route);

      const btnHome = screen.getByTestId("btn-home");

      fireEvent.click(btnHome);

      expect(screen.getByTestId("location-display")).toHaveTextContent("/");
    });
  });
});
