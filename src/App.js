import React from "react";
import logo from "./logo.svg";
import "./tailwind.output.css";
import Header from "./components/Header";
import ProfileHeader from "./components/ProfileHeader";

function App() {
  return (
    <div className="App">
      <Header />
      <ProfileHeader />
    </div>
  );
}

export default App;
