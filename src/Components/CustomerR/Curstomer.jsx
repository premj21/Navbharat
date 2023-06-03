import React from 'react'
import {Box,Text} from '@chakra-ui/react'

const Curstomer = ({name,msg}) => {
  return (
    <>
      <Box
        minW={{ base: "50%", md: "25%", lg: "27%" }}
        minH={{ base: "100%" }}
        display={"flex"}
        flexDir={"column"}
        alignItems={"start"}
        boxShadow={"0px 5px 20px rgba(0,0,0,0.150)"}
        borderRadius={"10px"}
        gap="2px"
        data-aos="flip-left"
      >
        <Box minW="80%" minH="50%" p="7%" overflowY={"scroll"} bg="#e6e9ec">
          <Text fontSize={{ base: "3vmin", md: "1.7vmin", lg: "2vmin" }}>
            {msg}
          </Text>
        </Box>
        <Text ml="2%">__</Text>
        <Text ml="2%" fontSize={{ base: "3.2vmin", md: "1.8vmin" }}>
          {name}
        </Text>
      </Box>
    </>
  );
}

export default Curstomer
