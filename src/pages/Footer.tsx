import * as React from "react";
import { Box, Container } from "@mui/material";
const Footer = () => {
  return (
    <div>
      <footer>
        <Box
          sx={{
            minHeight: "20px",
            backgroundColor: "#000000",
            color: "white",
            fontSize: "8px",
          }}
        >
          A sample application using Thunk & Kendo React
        </Box>
      </footer>
    </div>
  );
};
export default Footer;
