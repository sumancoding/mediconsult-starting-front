import React from "react";
import Header from "./Header";
import "./App.css";
import logo from "./Images/logo.PNG";
import Button from "./button";
import Footer from "./footer";

function App() {
  return (
    <div className="App">
      <Header />
      <img src={logo} alt="" className="image1" />
      <Button />
      <Footer />
    </div>
  );
}

export default App;
