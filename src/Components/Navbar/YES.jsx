import { Box,Image } from '@chakra-ui/react'
import React from 'react'
import pic from "../assets/navbharat logo copy.png";

import { useNavigate } from 'react-router-dom';

const YES = () => {
    const navigate  =useNavigate(); 
  return (
    <>
    <Box
     w={{base:"22vw",md:'15vw',lg:'10vw'}}
     position={'fixed'}
     top={{base:7,md:10}}
     left={{base:12,md:20}}
        zIndex={10000000000}
    >
      <Image
        onClick={() => navigate("/")}
        cursor={"pointer"}
        w="100%"
        src={pic}
        alt="nothing"
        />
        </Box>
    </>
  );
}

export default YES
