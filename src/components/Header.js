import React from 'react';

import useGlitch from '../hooks/useGlitch';

export default function Header() {
    const [glitchRef1, glitchVal1] = useGlitch("Hi, my name is");
    const [glitchRef2, glitchVal2] = useGlitch("Gary Peng");
    const [glitchRef3, glitchVal3] = useGlitch("Maker, Computer Science student @ Georgia Tech");

    return (
        <div class="container h-100 d-flex justify-content-center align-items-center">
            <div class="">
                    <h1 class="text-bold" ref={glitchRef1}>{glitchVal1}</h1>
                    <h1 class="display-1 text-bold outline" ref={glitchRef2}>{glitchVal2}</h1>
                    <h5 class="" ref={glitchRef3}>{glitchVal3}</h5>
            </div>
        </div>
    )
}
