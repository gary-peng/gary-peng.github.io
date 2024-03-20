import React from 'react'
import { Flex, Box, Text } from '@chakra-ui/react';
import GlitchText from './GlitchText';

import logo from "../assets/logo-white.png";
import GlitchLink from './GlitchLink';

export default function MainView() {
    return (
        <Flex h="100vh" w="100vw" flexDir="column" justifyContent="space-between" alignItems="start">
            <Flex h="50%" w="100%" justifyContent="space-between" alignItems="start" p="20px">
                <img src={logo} width="20pt" height="auto" loading="lazy" />
                <GlitchText>&#169; Gary Peng 2024</GlitchText>
            </Flex>
            <Flex h="50%" w="100%" justifyContent="space-between" alignItems="end" alignContent="flex-end" p="20px" wrap="wrap">
                <Box>
                    <GlitchText>+ software engineer</GlitchText>
                    <GlitchText>+ based in new york city</GlitchText>
                    <GlitchText>+ b.s. and m.s. in computer science from georgia tech</GlitchText>
                    <GlitchText>+ interested large-scale distributed systems and data infrastructures</GlitchText>
                    <GlitchText>+ also likes clothes and rock climbing</GlitchText>
                </Box>
                <Text pt="5%" fontSize="10pt"><GlitchLink href="https://www.linkedin.com/in/garyhpeng" url>linkedin</GlitchLink> | <GlitchLink href="https://github.com/gary-peng" url>Github</GlitchLink></Text>
            </Flex>
        </Flex>

    )
}
