import React from 'react'
import {Box,Image,Text} from '@chakra-ui/react'
import pic from "../assets/navbharat logo copy.png";
import { useNavigate } from 'react-router-dom';
const Navbar2 = () => {
    const navigate = useNavigate(); 
  return (
    <Box w="90vw" display={"flex"}>
      <Box position={"fixed"} w="20vw" top={5} left={10}>
        <Image zIndex={10000000000} w="35%" h="20%" src={pic} alt="nothing" />
      </Box>
      <Box
      
        display={"flex"}
        flexDir={"column"}
        gap="10px"
        position={"fixed"}
        top={5}
        right={10}
      >
        <Text
          textAlign={"end"}
          _hover={{
            fontSize: "2.3vmin",
            fontWeight: "600",
            textAlign: "center",
          }}
          fontSize={{ base: "3vmin", md: "2.2vmin" }}
          letterSpacing={"3.5px"}
          cursor={"pointer"}
          onClick={() => navigate("/")}
        >
          Home
        </Text>
        <Text
          textAlign={"end"}
          _hover={{
            fontSize: "2.3vmin",
            fontWeight: "600",
            textAlign: "center",
          }}
          fontSize={{ base: "3vmin", md: "2.2vmin" }}
          cursor={"pointer"}
          letterSpacing={"3.5px"}
          onClick={() => navigate("/About")}
        >
          About
        </Text>
        <Text
          textAlign={"end"}
          _hover={{
            fontSize: "2.3vmin",
            fontWeight: "600",
            textAlign: "center",
          }}
          fontSize={{ base: "3vmin", md: "2.2vmin" }}
          cursor={"pointer"}
          letterSpacing={"3.5px"}
          onClick={() => navigate("/contact")}
        >
          Contact
        </Text>
      </Box>
    </Box>
  );
}

export default Navbar2
