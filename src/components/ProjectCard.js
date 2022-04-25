import React from 'react';
import { Heading, Text, Flex, Box, Image } from '@chakra-ui/react';

import BadgeBtn from './BadgeBtn'

export default function ProjectCard(props) {
    return (
        <Flex flexDirection="column" width={{ base: "80vw", md: "20vw" }} border="1px solid white" borderRadius="7px" m="10px" p="15px" overflowY="auto">
            <Image objectFit="contain" borderRadius="7px" mb="20px" src={props.project.img} />
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
