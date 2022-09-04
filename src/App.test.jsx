import { render, screen } from "@testing-library/react";

import App from "./App";

import { LocationDisplay } from "./App";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

describe("I am on the home page", () => {
  it("should displya the main titles", () => {
    const route = "/";

    render(
      <MemoryRouter initialEntries={[route]}>
        <App />
        {/* <LocationDisplay /> */}
      </MemoryRouter>
    );

    const title = screen.getByText("HRnet");
    const subTitle = screen.getByText("Create Employee");

    expect(title).toBeTruthy();
    expect(subTitle).toBeTruthy();
  });
});

describe("I am on the employee table page", () => {
  it("should displya the main title", () => {
    const route = "/current-employees";

    render(
      <MemoryRouter initialEntries={[route]}>
        <App />
        {/* <LocationDisplay /> */}
      </MemoryRouter>
    );

    const title = screen.getByText("Current Employees");
    expect(title).toBeTruthy();
  });
});
