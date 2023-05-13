import React from 'react'
import {Text,Box,Image} from '@chakra-ui/react'
import pic from '../assets/navbharat logo copy.png'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

  const navigate = useNavigate();
  const textanm = {
    ascren: { x: 200, opacity:0 },
    cscren: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <Box
        boxShadow="0px 5px 20px rgba(0,0,0,0.149)"
        zIndex={1000}
        w="100vw"
        h="fit-content"
        bg="#ffffff"
        display={"flex"}
        alignItems={"center"}
        p="0.7rem"
      >
        <Box cursor={"pointer"} onClick={() => navigate("/")}>
          <Image
            as={motion.img}
            variants={textanm}
            animate={"ascren"}
            whileInView={"cscren"}
            viewport={{ once: false, amount: 1 }}
            src={pic}
            ml="100%"
            w="8vmax"
            h="4.5vmax"
          
          />
        </Box>
        <Box
          display={"flex"}
          h="100%"
          w="100%"
          alignItems={"center"}
          justifyContent={"end"}
          mr="2rem"
          gap="6%"
        >
          <Text
            _hover={{ fontSize: "2.2vmin", color: "red" }}
            fontSize={{ base: "3vmin", md: "2.1vmin" }}
            cursor={"pointer"}
            onClick={() => navigate("/")}
          >
            Home
          </Text>
          <Text
            _hover={{ fontSize: "2.2vmin", color: "red" }}
            fontSize={{ base: "3vmin", md: "2.1vmin" }}
            cursor={"pointer"}
            onClick={() => navigate("/About")}
          >
            About
          </Text>
          <Text
            _hover={{ fontSize: "2.2vmin", color: "red" }}
            fontSize={{ base: "3vmin", md: "2.1vmin" }}
            cursor={"pointer"}
            onClick={() => navigate("/contact")}
          >
            Contact
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default Navbar
