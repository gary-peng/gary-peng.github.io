import React from 'react';
import { Link } from '@chakra-ui/react';

import useGlitch from '../hooks/useGlitch';

export default function BadgeBtn(props) {
    const [glitchRef, glitchVal] = useGlitch(props.text);

    return (
        <Link fontSize='xs' p="5px" mr='5px' width="fit-content" border="1px solid white" borderRadius="5px" color="white"  _hover={{ textDecoration: 'none', color: "white" }} _focus={{}} _active={{}} isExternal={props.url} href={props.href} ref={glitchRef}>{glitchVal}</Link>
    )
}
