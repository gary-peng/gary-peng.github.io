import React from 'react'

import useGlitch from '../hooks/useGlitch';

import { Text } from '@chakra-ui/react';

export default function GlitchText(props) {
    const [glitchRef, glitchVal] = useGlitch(props.children);

    return (
        <Text fontWeight="normal" fontSize="10pt" ref={glitchRef}>{glitchVal}</Text>
    )
}
