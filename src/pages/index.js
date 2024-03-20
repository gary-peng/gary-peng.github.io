import * as React from "react";
import "../styles/global.css";

import { Helmet } from "react-helmet"
import { ChakraProvider } from "@chakra-ui/provider";

import theme from "../styles/theme";
import MainView from "../components/MainView";

const IndexPage = () => {
  return (
        <div id="index">
            <Helmet>
                <title>gary peng</title>
            </Helmet>

            <ChakraProvider theme={theme}>
                <MainView />
            </ChakraProvider>
        </div>
  )
}

export default IndexPage
