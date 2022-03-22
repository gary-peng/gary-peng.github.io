import React from 'react'

import useGlitch from '../hooks/useGlitch';

export default function NavLink(props) {
    const [glitchRef, glitchVal] = useGlitch(props.text, "black");

    if (props.url) {
        return <a class="nav-link" href={props.href} target="_blank" rel="noopener noreferrer" ref={glitchRef}>{glitchVal}</a>
    }

    return (
        <a class="nav-link" href={props.href} ref={glitchRef}>{glitchVal}</a>
    )
}
