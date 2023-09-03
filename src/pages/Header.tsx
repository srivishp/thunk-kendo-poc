import React from "react";
import { AppBar, Toolbar, CssBaseline, Typography } from "@mui/material/";
import { Link } from "react-router-dom";
import { Theme, makeStyles, createStyles } from "@mui/material/styles";
import KendoMenu from "./KendoMenu";

function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        minHeight: 30,
        height: 30,
        backgroundColor: "#b5e6eb",
        borderBottomColor: "#000000",
        border: "1",
      }}
    >
      <Toolbar>
        <div className="header">Thunk & Kendo React - POC</div> <KendoMenu />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
