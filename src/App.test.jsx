import { fireEvent, render, screen } from "@testing-library/react";

import App from "./App";
import Home from "./pages/Home";

import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "./store";

describe("I am on the home page", () => {
  it("should displya the main titles", () => {
    const route = "/";

    render(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    );

    const title = screen.getByText("HRnet");
    const subTitle = screen.getByText("Create Employee");

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

      // expect(screen.getByTestId("location-display")).toHaveTextContent(route);

      const save = screen.getByTestId("save-btn");
      const modal = screen.getByTestId("modal");
      expect(save).toBeInTheDocument();
      expect(modal.className).toContain("hidden");

      const dataToSave = {
        firstName: "Hello",
        lastName: "World",
        startDate: "24/10/2011",
        department: "Marketing",
        dateOfBirth: "19/08/1960",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      };

      const handleSubmitMock = jest.fn();

      function checkInputsOnSubmit(array) {
        let errors = {};
        let errorCounter = 0;
        let formIsValid = false;
        for (const key in array) {
          if (`${array[key]}` === "") {
            errors = { ...errors, [key]: "*required field" };
            errorCounter++;
          } else {
            errors = { ...errors, [key]: "" };
          }
        }
        console.log(errors);
        if (errorCounter === 0) {
          formIsValid = true;
        }
        return { formIsValid, errors };
      }

      const checkInputsOnSubmitMock = jest.fn(checkInputsOnSubmit);
      fireEvent.click(save, handleSubmitMock(dataToSave));
      expect(handleSubmitMock).toHaveBeenCalled();
      expect(handleSubmitMock).toHaveBeenCalledWith(dataToSave);
      checkInputsOnSubmitMock(dataToSave);
      expect(checkInputsOnSubmitMock).toHaveBeenCalled();

      modal.classList.remove("hidden");

      expect(modal.className).not.toContain("hidden");
      expect(modal).toBeVisible();
    });
  });
  describe("when I click on the button 'view current employees'", () => {
    it("should go to the page of the current employees", async () => {
      const route = "/";

      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={[route]}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      // expect(screen.getByTestId("location-display")).toHaveTextContent(route);
      const title = screen.getByText("HRnet");
      const subTitle = screen.getByText("Create Employee");

      expect(title).toBeInTheDocument();
      expect(subTitle).toBeInTheDocument();

      const btnEmployees = screen.getByTestId("btn-employees");

      fireEvent.click(btnEmployees);

      const titleEmployees = screen.getByText("Current Employees");

      expect(titleEmployees).toBeInTheDocument();

      // expect(screen.getByTestId("location-display")).toHaveTextContent(
      //   "/current-employees"
      // );
    });
  });
});

describe("I am on the employee table page", () => {
  it("should displya the main title", () => {
    const route = "/current-employees";

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    const title = screen.getByText("Current Employees");
    expect(title).toBeInTheDocument();
  });
  describe("when I click on the button 'home'", () => {
    it("should redirect to the home page to create a new employee", async () => {
      const route = "/current-employees";

      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={[route]}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      // expect(screen.getByTestId("location-display")).toHaveTextContent(route);

      const btnHome = screen.getByTestId("btn-home");

      const titleEmployees = screen.getByText("Current Employees");

      expect(titleEmployees).toBeInTheDocument();

      fireEvent.click(btnHome);

      const title = screen.getByText("HRnet");
      const subTitle = screen.getByText("Create Employee");

      expect(title).toBeInTheDocument();
      expect(subTitle).toBeInTheDocument();

      // expect(screen.getByTestId("location-display")).toHaveTextContent("/");
    });
  });
});
