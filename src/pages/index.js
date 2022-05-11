import * as React from "react";
import "../styles/global.css";

import { Helmet } from "react-helmet"
import { ChakraProvider } from "@chakra-ui/provider";

import Navbar from "../components/Navbar";
import CollapseNav from "../components/CollapseNav";
import Header from "../components/Header";
import ProjectList from "../components/ProjectList";
import Footer from "../components/Footer";

// import Fonts from "../styles/fonts";
import theme from "../styles/theme";

const IndexPage = () => {
  return (
        <div id="index">
            <Helmet>
                <title>Gary Peng</title>
            </Helmet>

            <ChakraProvider theme={theme}>
                <Navbar />
                <CollapseNav />
                <Header />
                <ProjectList />
                <Footer />
            </ChakraProvider>
        </div>
  )
}

export default IndexPage
