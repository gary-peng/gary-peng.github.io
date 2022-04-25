import React from 'react';
import { Link } from '@chakra-ui/react';

import useGlitch from '../hooks/useGlitch';

export default function NavLink(props) {
    const [glitchRef, glitchVal] = useGlitch(props.text);
    const handleVert = () => {
        if (props.vert) {
            return { writingMode: "vertical-rl" };
        }

        return {}; 
    }

    return (
        <Link p={0} sx={handleVert()} _hover={{ textDecoration: 'none', color: "white" }} _focus={{}} _active={{}} isExternal={props.url} href={props.href} ref={glitchRef}>{glitchVal}</Link>
    )
}
