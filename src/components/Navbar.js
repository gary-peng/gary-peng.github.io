import React from 'react';

import logo from "../assets/logo-white.png";
import resume from "../assets/Gary_Peng_Resume.pdf";
import NavLink from './NavLink';

export default function Navibar() {

    return (
        <div class="sidenav d-none d-md-flex flex-column justify-content-between align-items-center h-100 py-3 px-2">
            <img class="" src={logo} width="25" height="auto" loading="lazy" />
            <NavLink href="/#projects" text="Projects" />
            <NavLink href={resume} text="Resume" url />
            <NavLink href="https://github.com/gary-peng" text="Github" url />
            <NavLink href="https://www.linkedin.com/in/garyhpeng" text="Linkedin" url />
            <NavLink href="mailto:gpeng8@gatech.edu" text="Email" />
        </div>
    )
}

