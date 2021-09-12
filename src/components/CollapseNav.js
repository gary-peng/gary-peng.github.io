import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';

import logo from "../assets/logo-white.png";
import resume from "../assets/Gary_Peng_Resume.pdf";
import NavLink from './NavLink';

export default function CollapseNav() {
    const [open, setOpen] = useState(false);

    return (
        <div class="d-block d-md-none">
            <div class="container d-flex justify-content-between pt-3">
                <img class="" src={logo} width="30" height="auto" loading="lazy" />
                <button class="navbar-toggler" type="button" onClick={() => setOpen(!open)}>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </button>
            </div>
            <Collapse className="container mt-2" in={open}>
                <div >
                    <NavLink href="/#projects" text="Projects" />
                    <NavLink href={resume} text="Resume" url />
                    <NavLink href="https://github.com/gary-peng" text="Github" url />
                    <NavLink href="https://www.linkedin.com/in/garyhpeng" text="Linkedin" url />
                    <NavLink href="mailto:gpeng8@gatech.edu" text="Email" />
                </div>
            </Collapse>
        </div>
    )
}
