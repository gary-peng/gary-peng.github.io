import React from 'react';
import { Heading, Text, Flex, Box, Image } from '@chakra-ui/react';

import BadgeBtn from './BadgeBtn'

export default function ProjectCard(props) {
    return (
        <Flex flexDirection="column" width={{ base: "80vw", md: "20vw" }} height={{ base: "60vh", md: "50vh" }} border="1px solid white" borderRadius="7px" m="10px" p="15px" overflowY="auto">
            <Flex height="30%" justifyContent="center" mb="20px"> 
                <Image height="100%" objectFit="contain" border="1px solid white" borderRadius="7px" src={props.project.img} />
            </Flex>
            <Heading fontWeight="normal" textDecoration="underline" size="md" mb="10px">{props.project.name}</Heading>
            <Text fontSize='xs' mb="10px">{props.project.lang}, {props.project.tech}</Text>
            <Text mb="20px">{props.project.desc}</Text>

            <Box>
                {
                    props.project.links.map((el) => {
                        return <BadgeBtn href={el.url} text={el.name} url />
                    })
                }
            </Box>
        </Flex>
    )
}
