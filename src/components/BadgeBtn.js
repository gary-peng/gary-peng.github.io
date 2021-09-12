import React from 'react';

import useGlitch from '../hooks/useGlitch';

export default function BadgeBtn(props) {
    const [glitchRef, glitchVal] = useGlitch(props.text);

    return (
        <a class="badge badge-pill mr-1" href={props.href} target="_blank" rel="noopener noreferrer" ref={glitchRef}>{glitchVal}</a>
    )
}
