import React from "react";
import { Header } from "../../components/Header/Header.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import "../../services/style/main.scss";

export function Contacts() {

  return (
    <div>
      <Header />
      <div className="contentPage">
        <h1>Contacts:</h1>
        <p className="content">Email:  
          <span style={{
            paddingLeft: "10px",
            fontSize: "20px",
          }}>
            <a href="mailto:123456@gmail.com">1234567@gmail.com</a>
          </span>
        </p>
        <p className="content">Phone: 
        <span style={{
            paddingLeft: "10px",
            fontSize: "20px",
          }}>
            <a href="tel:1234567890">1234567890</a>
          </span>
        </p>
      </div>
      <Footer />
    </div>
  );
}
