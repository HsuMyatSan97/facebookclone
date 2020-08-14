import React from "react";
import logo from "./logo.svg";
import "./tailwind.output.css";
import Header from "./components/Header";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
    </div>
  );
}

export default App;
