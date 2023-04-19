import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "../css/home.css";
import About from "./About";
import PortfolioExperience from "./PortfolioExperience";
import Work from "./Work";
import Contact from "./Contact";
import PortfolioMain from "./PortfolioMain";
import CommonNav from "../common/CommonNav";
import SideBar from "../common/SideBar";
import Footer from "../common/Footer";
const theme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="portfolio-body" style={{ height: "100%" }}>
        <CommonNav></CommonNav>
        <SideBar></SideBar>
        <div id="content">
          <main className="portfolio-home fillHeight">
            <PortfolioMain></PortfolioMain>
            <About></About>
            <PortfolioExperience></PortfolioExperience>
            {/* <Work></Work> */}
            <Contact></Contact>
          </main>
          <Footer></Footer>
        </div>
      </div>
    </ThemeProvider>
  );
}
