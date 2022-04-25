import React from 'react';
import { Heading, Flex, Box, useBreakpointValue  } from '@chakra-ui/react';

import ProjectCard from './ProjectCard';
import data from '../data';

export default function ProjectList() {
    const breakPt = useBreakpointValue({ base: 'base', md: 'md' })
    console.log(breakPt)

    const projectGroup = []
    for (let i = 0; i < data.projects.length; i++) {
        if (i % 3 === 0) projectGroup.push([]);
        projectGroup[projectGroup.length - 1].push(data.projects[i])
    }

    const projectCards = () => {
        if (breakPt === "base") {
            return projectGroup.map((group) => {
                return (
                    group.map((el) => {
                        return <ProjectCard project={el} />
                    })
                );
            });
        }

        return projectGroup.map((group) => {
            return (
                <Flex>
                {
                    group.map((el) => {
                        return <ProjectCard project={el} />
                    })
                }
                </Flex>
            );
        });
    }


    return (
        <Flex flexDirection="column" alignItems="center" id="projects">
            <Box>
                <Heading fontWeight="normal" fontSize='25px' mt="20px" ml="10px">Projects</Heading>
                {projectCards()}
            </Box>
        </Flex>
    )
}
