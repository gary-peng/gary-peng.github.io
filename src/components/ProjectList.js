import React from 'react';

import ProjectCard from './ProjectCard';
import data from '../data';

export default function ProjectList() {
    return (
        <div class="container" id="projects">
            <h3 class="font-weight-bold mb-3">Projects</h3>
            {
                data.projects.map((el) => {
                    return <ProjectCard project={el} />
                })
            }
        </div>
    )
}
