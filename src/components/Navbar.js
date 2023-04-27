import React from 'react';
import { Flex } from '@chakra-ui/react';

import logo from "../assets/logo-white.png";
import NavLink from './NavLink';

export default function Navibar() {

    return (
        <Flex h="100vh" justifyContent="center" alignItems="center" position="fixed" display={{ base: "none", md: "flex" }}>
            <Flex h="80%" flexDirection="column" justifyContent="space-between" alignItems="center" ml="30px" px="5px" py="10px" border="1px solid white">
                <img src={logo} width="22" height="auto" loading="lazy" />
                <NavLink href="/#projects" text="Projects" vert />
                <NavLink href="https://github.com/gary-peng" text="Github" url vert />
                <NavLink href="https://www.linkedin.com/in/garyhpeng" text="Linkedin" url vert />
                <NavLink href="mailto:gpeng8@gatech.edu" text="Email" vert />
            </Flex>
        </Flex>
    )
}

