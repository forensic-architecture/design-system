import React from "react";
import { Button, Card } from "fa-design-system/react";
// import "fa-design-system/dist/index.css";

// import logo from "./logo.svg";
import "./App.css";
import { CardProps } from "./test/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h3>Forensic Architecture — Design System</h3>
        <p>
          Test that our locally-linked <code>design-system</code> NPM package,
          correctly retrieves components
        </p>
        <Button primary label={"Button"} />
        <Card {...CardProps} />
      </header>
    </div>
  );
}

export default App;
