import React from "react";
import { Header } from "../../components/Header/Header.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import "../../services/style/main.scss";


export function About() {

  return (
    <div>
      <Header />
      <div className="contentPage">
        <h1>About me</h1>
        <p className="content">Hello! My name is Valeria!</p>
      </div>
      <Footer />
    </div>
  );
}