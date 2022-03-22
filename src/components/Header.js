import React from 'react';

import useGlitch from '../hooks/useGlitch';

export default function Header() {
    const [glitchRef1, glitchVal1] = useGlitch("Hi, my name is", "black");
    const [glitchRef2, glitchVal2] = useGlitch("Gary Peng", "white");
    const [glitchRef3, glitchVal3] = useGlitch("Maker, Computer Science student @ Georgia Tech", "black");

    return (
        <div class="container h-100 d-flex justify-content-center align-items-center">
            <div class="">
                    <h1 class="" ref={glitchRef1}>{glitchVal1}</h1>
                    <h1 class="outline display-1" ref={glitchRef2}>{glitchVal2}</h1>
                    <h4 class="bold" ref={glitchRef3}>{glitchVal3}</h4>
            </div>
        </div>
    )
}
