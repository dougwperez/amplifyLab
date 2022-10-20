import logo from "./logo.svg";
import "./App.css";
import { DataStore, Auth, API, graphqlOperation } from "aws-amplify";
import * as queries from "./graphql/queries";

function App() {
  async function testAPI() {
    try {
      const allTodos = await API.graphql({ query: queries.listTodos });
      console.log("allTodos", allTodos);
    } catch (err) {
      console.log("error checking data:", err);
    }
  }
  testAPI();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
