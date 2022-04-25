import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';

import useGlitch from '../hooks/useGlitch';

export default function Footer() {
    const [glitchRef, glitchVal] = useGlitch("\u00A9 Gary Peng 2020");

    return (
        <Box mt="40px">
            <Text align='center' ref={glitchRef}>{glitchVal}</Text>
        </Box>
    )
}
