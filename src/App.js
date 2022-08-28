import "./App.css";
import { Select } from "select-react-component/dist";
import { states } from "./data/statesData";
import { Link } from "react-router-dom";

function App() {
  console.log(states);

  const stateNames = states.map((state) => {
    return state.name;
  });

  console.log(stateNames);
  return (
    <div className="App">
      <header className="title">
        <h1>HRnet</h1>
      </header>
      <main>
        <div className="container">
          <Link to="/current-employees">View Current Employees</Link>
          <h2>Create Employee</h2>
          <form action="#" id="create-employee">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" />

            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" />

            <label htmlFor="date-of-birth">Date of Birth</label>
            <input id="date-of-birth" type="date" />

            <label htmlFor="start-date">Start Date</label>
            <input id="start-date" type="date" />

            <fieldset className="address">
              <legend>Address</legend>

              <label htmlFor="street">Street</label>
              <input id="street" type="text" />

              <label htmlFor="city">City</label>
              <input id="city" type="text" />

              <label htmlFor="state">State</label>
              <Select data={stateNames} />
              {/* <select name="state" id="state"></select> */}

              <label htmlFor="zip-code">Zip Code</label>
              <input id="zip-code" type="number" />
            </fieldset>

            <label htmlFor="department">Department</label>
            <Select
              name="department"
              id="department"
              data={[
                "Sales",
                "Marketing",
                "Engineering",
                "Human Resources",
                "Legal",
              ]}
            />
          </form>

          <button onClick="saveEmployee()">Save</button>
        </div>
      </main>
      <div id="confirmation" className="modal">
        Employee Created!
      </div>
    </div>
  );
}

export default App;
