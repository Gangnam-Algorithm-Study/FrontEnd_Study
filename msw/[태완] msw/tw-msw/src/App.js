import logo from "./logo.svg";
import "./App.css";

console.log("?", process.env.NODE_ENV);
if (typeof window === "undefined") {
  const { server } = require("../mocks/server");
  server.listen();
} else {
  const { worker } = require("../mocks/browser");
  worker.start();
}

function App() {
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
