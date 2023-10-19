import React, { useState } from "react";
import "./App.css";
import Carlist from "./components/Carlist";
import { AppBar, Typography, Toolbar } from "@mui/material";

function App() {
  return (
    <div className="App">
      <AppBar position="static" className="appbar">
        <Toolbar>
          <Typography
            className="typography"
            variant="h6"
            style={{ fontSize: "55px" }}
          >
            Carshop
          </Typography>
        </Toolbar>
      </AppBar>
      <Carlist />
    </div>
  );
}

export default App;
