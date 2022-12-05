import React, { useState } from 'react'
import { Collapse, Button, Box, Flex } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import logo from "../assets/logo-white.png";
import resume from "../assets/Gary_Peng_Resume.pdf";
import NavLink from './NavLink';

export default function CollapseNav() {
    const [open, setOpen] = useState(false);

    return (
        <Box display={{ base: "block", md: "none" }} p="20px">
            <Flex justifyContent="space-between" alignItems="center">
                <img src={logo} width="25" height="auto" loading="lazy" />
                <Button 
                    color="white"
                    onClick={() => setOpen(!open)}
                    bg="transparent"
                    _hover={{}}
                    _focus={{ outline: "none" }}
                    _active={{}}><HamburgerIcon w="25px" h="auto" /></Button>
            </Flex>
            <Collapse in={open}>
                <Flex flexDirection="column" alignItems="end" mt="10px">
                    <NavLink href="/#projects" text="Projects" />
                    <NavLink href={resume} text="Resume" url />
                    <NavLink href="https://github.com/gary-peng" text="Github" url />
                    <NavLink href="https://www.linkedin.com/in/garyhpeng" text="Linkedin" url />
                    <NavLink href="mailto:gpeng8@gatech.edu" text="Email" />
                </Flex>
            </Collapse>
        </Box>
    )
}
