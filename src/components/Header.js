import React from 'react';
import { Heading, Flex, Box } from '@chakra-ui/react';
import useGlitch from '../hooks/useGlitch';

export default function Header() {
    const [glitchRef1, glitchVal1] = useGlitch("Hi, my name is");
    const [glitchRef2, glitchVal2] = useGlitch("Gary Peng");
    const [glitchRef3, glitchVal3] = useGlitch("Maker, Computer Science student @ Georgia Tech");

    return (
        <Flex h="100vh" justifyContent="center" alignItems="center">
            <Box>
                    <Heading fontWeight="normal" fontSize={{ base: "20px", md: "40px" }} ref={glitchRef1}>{glitchVal1}</Heading>
                    <Heading fontWeight="normal" fontSize={{ base: "50px", md: "100px" }} textShadow="-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white" color="black" ref={glitchRef2}>{glitchVal2}</Heading>
                    <Heading fontWeight="normal" fontSize={{ base: "10px", md: "20px" }} ref={glitchRef3}>{glitchVal3}</Heading>
            </Box>
        </Flex>
    )
}
