import React from "react";
import "./App.css";
import { About, Services, Header, Contact, Footer } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <Contact />
      <Footer />
      <div className="app__footer"></div>
    </div>
  );
}

export default App;
