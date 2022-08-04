import "./App.css";
import FirstPage from "./FirstPage/FirstPage";

// TODO:
// 1. https://excitel-countries.azurewebsites.net/countries

// 2. Present in a responsive grid view (table) the results of API1. Provide a filter on name, sorting
// of columns and paging.

// 3. Implement details view with the same fields present in the table. Show that details view when
// the user presses and holds left mouse button over table’s row for several seconds. Implement
// some form of small countdown (or progress) indicator so that the user can see how long he
// should keep pressing until the details view is shown.

// 4. Implement an autocomplete filter box for the countries using API2 (on each symbol entered in
// the filter box a suggestions dropdown with up to 10 items is displayed). Prevent multiple
// requests on each symbol entered (wait until the typing is complete).
// When a country is selected show more information about it using the API2 results

// 5. Try to architect your solution using best practices - separation of concerns, SOLID principles,
// DRY etc.

// 6. Publish your solution in github and send a link.

// Style the frontend

// Please note that the CORS of the API is intentionally not enabled. You can try to overcome this
// or contact us to enable the CORS policy for you.
function App() {
  return (
    <main className="main">
      <seciton style={{width: '90%'}}>
        <FirstPage />
      </seciton>
    </main>
  );
}

export default App;
