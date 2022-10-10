import React from "react";
import {
    Box,
    Flex,
    AspectRatio,
    Image,
    Text,
    Link,
    Button,
    Stack,
    useBreakpointValue
} from "@chakra-ui/react";

import { fazemos } from "../fazemos";

const Card: React.FC = () => {
    const isDesktop = useBreakpointValue({ lg: "none" });


    return (
        <>
            {isDesktop ?
                <Flex flexWrap="wrap">
                    {fazemos.map((e) => (
                        <Box m={3} mt={10} p={5} borderRadius={10} w={"22rem"} bg="#1B1918" color='white' >
                            <div id={e.id} style={{ width: "20rem" }}>
                                <img src={e.icon} />
                                <Text mt={3} mb={3} fontSize={20} fontWeight={"bold"}>{e.title}</Text>
                                <Text>{e.body}</Text>
                            </div>
                        </Box>
                    ))}
                </Flex>
                :
                <div className="overflow-auto">
                    <Flex >
                        {fazemos.map((e) => (
                            <Box m={3} mt={10} p={5} borderRadius={10} bg="#1B1918" color='white' >
                                <div id={e.id} style={{ width: "13rem", height: "19rem" }}>
                                    <img src={e.icon} />
                                    <Text mt={3} mb={3} fontSize={20} fontWeight={"bold"}>{e.title}</Text>
                                    <Text>{e.body}</Text>
                                </div>
                            </Box>
                        ))}
                    </Flex>
                </div>
            }
        </>
    );
}

export default Card;

function getElementById(arg0: string) {
    throw new Error("Function not implemented.");
}
