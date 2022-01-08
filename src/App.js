import React from "react";
import Header from "./components/Header";
import "./App.css";
import logo from "./Images/logo.PNG";
import Button from "./components/button";
import Footer from "./components/footer";

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
