import React from 'react';
import { Heading, Flex, Box } from '@chakra-ui/react';
import useGlitch from '../hooks/useGlitch';

export default function Header() {
    const [glitchRef1, glitchVal1] = useGlitch("Hi, my name is");
    const [glitchRef2, glitchVal2] = useGlitch("Gary Peng");
    const [glitchRef3, glitchVal3] = useGlitch("Graduate student @ Georgia Tech");

    return (
        <Flex h="100vh" justifyContent="center" alignItems="center">
            <Box >
                    <Heading fontWeight="normal" fontSize={{ base: "20px", md: "40px" }} ref={glitchRef1}>{glitchVal1}</Heading>
                    <Heading fontWeight="normal" fontSize={{ base: "50px", md: "100px" }}  ref={glitchRef2}>{glitchVal2}</Heading>
                    <Heading fontWeight="normal" mt={{ base: "5px", md: "20px" }} fontSize={{ base: "10px", md: "20px" }} ref={glitchRef3}>{glitchVal3}</Heading>
            </Box>
        </Flex>
    )
}
