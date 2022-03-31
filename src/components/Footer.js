import React from 'react';

import useGlitch from '../hooks/useGlitch';

export default function Footer() {
    const [glitchRef, glitchVal] = useGlitch("\u00A9 Gary Peng 2020");

    return (
        <div class="container">
            <p class="m-0 text-center" ref={glitchRef}>{glitchVal}</p>
        </div>
    )
}
