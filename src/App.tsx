import React from "react";
import "./App.scss";
import UserApp from "./components/userapp/UserApp";

function App() {
  return (
    <div className="app">
      <header className="app-header">User Registration</header>
      <div className="app-body">
        <div className="contents">
        <UserApp></UserApp>
        </div>
      </div>
    </div>
  );
}

export default App;
