import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/global.css";

import { Helmet } from "react-helmet"

import Navbar from "../components/Navbar";
import CollapseNav from "../components/CollapseNav";
import Header from "../components/Header";
import ProjectList from "../components/ProjectList";
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
        <div id="index">
            <Helmet>
                <title>Gary Peng</title>
            </Helmet>

            <Navbar />
            <CollapseNav />
            <Header />
            <ProjectList />
            <Footer />
        </div>
  )
}

export default IndexPage
