import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";

function App() {
  return (
    <>
      <div className="page">
        <Navbar />

        <div className="page__content">
          <Header />

          <div id="main">
            <Main />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
