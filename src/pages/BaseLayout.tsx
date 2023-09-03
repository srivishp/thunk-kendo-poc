import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import "../App.scss";
import  Users from "./Users";
import  HomePage from "./HomePage";
import  Footer from "./Footer";
import  Header from "./Header";
import  About from "./About";

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const BaseLayout = () => {
    return (
        <React.Fragment>
        <div className="base"> 
            <Grid spacing={3} >
            <Grid item xs={12} sm={4}>
                    <Header />
                    <div className="container">
                    <Routes>
                        <Route path="/" element={<Users />} />
                        <Route path="/transactionlist" element={<HomePage />}   /> 
                        <Route path="/Users" element={<Users />} /> 
                    </Routes>
                    </div>
                    <Footer /> 
            </Grid> 
            </Grid> 
      </div>
      </React.Fragment>
    )
}
export default BaseLayout; 