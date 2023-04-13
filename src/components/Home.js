import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "../css/Home.css";

import About from "./About";
import PortfolioExperience from "./PortfolioExperience";
import Work from "./Work";
import Contact from "./Contact";
import PortfolioMain from "./PortfolioMain";
import CommonNav from "../common/CommonNav";
const theme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="portfolio-body" style={{ height: "100%" }}>
        <CommonNav></CommonNav>
        <div id="content">
          <main className="portfolio-main fillHeight">
            <PortfolioMain></PortfolioMain>
            <About></About>
            <PortfolioExperience></PortfolioExperience>
            <Work></Work>
            <Contact></Contact>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}
