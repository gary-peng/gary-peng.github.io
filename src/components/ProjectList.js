import React from 'react';
import { Heading, Flex, Box } from '@chakra-ui/react';

import ProjectCard from './ProjectCard';
import data from '../data';

export default function ProjectList() {
    const projectGroup = []
    for (let i = 0; i < data.projects.length; i++) {
        if (i % 3 === 0) projectGroup.push([]);
        projectGroup[projectGroup.length - 1].push(data.projects[i])
    }


    return (
        <Flex justifyContent="center" id="projects">
            <Box>
                <Heading fontWeight="normal" fontSize='25px' mt="20px" ml="10px">Projects</Heading>
                {
                    projectGroup.map((group) => {
                        return (<Flex flexWrap="wrap">
                            {
                                group.map((el) => {
                                    return <ProjectCard project={el} />
                                })
                            }
                        </Flex>)
                    })
                }
            </Box>
        </Flex>
    )
}
