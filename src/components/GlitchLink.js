import React from 'react';
import { Link } from '@chakra-ui/react';

import useGlitch from '../hooks/useGlitch';

export default function GlitchLink(props) {
    const [glitchRef, glitchVal] = useGlitch(props.children);

    return (
        <Link fontSize="10pt" _hover={{ textDecoration: 'none', color: "white" }} _focus={{}} _active={{}} isExternal={props.url} href={props.href} ref={glitchRef}>{glitchVal}</Link>
    )
}
