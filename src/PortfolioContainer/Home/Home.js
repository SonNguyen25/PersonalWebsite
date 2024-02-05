import React from "react";
import Header from "./Header/Header"
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import "./Home.css";
// import Particles from "react-tsparticles";
// import BlankFooter from "./Footer/BlankFooter";

export default function Home() {
  return (
    <div className="home-container">
    
      <Header />
      <Profile />  
      <Footer />
      {/* <BlankFooter /> */}
      
    </div>
  );
}
