import React from 'react'
import {Box,Text} from '@chakra-ui/react'
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import '../../index.css';

const Footer = () => {
  return (
    <Box
      w="100vw"
      ml={{ lg: "-5rem" }}
      _hover={{
        bg: "red.500",
        color: "white",
      }}
      p={{ base: "1.3rem", md: "2.6rem",lg:'2.8rem' }}
      display={'flex'}
      flexDir={'column'}
      gap='28px'
    >
      <Box
        // w="100vw"
        // ml={{ lg: "-5rem" }}
        // _hover={{
        //   bg: "red.500",
        //   color: "white",
        // }}
        // p={{ base: "2rem", md: "3rem" }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={{ base: "space-evenly", md: "space-between" }}
        gap={{ base: "20px", md: "0" }}
      >
        <Text
          w="40vw"
          textAlign={"start"}
          ml="15px"
          fontSize={{ base: "1.5vmin", md: "2vmin" }}
          letterSpacing={"12px"}
          fontWeight={"600"}
        >
          WATCH COMPANY
        </Text>

        <Box display={"flex"} alignItems={"center"} gap="20px">
          <Box w="15vw">
            <Text
              fontSize={{ base: "1.7vmin", md: "1.3vmin", lg: "1.7vmin" }}
              letterSpacing={"2px"}
              fontWeight={"600"}
            >
              About Us
            </Text>
            <Text
              fontSize={{ base: "1.7vmin", md: "1.3vmin", lg: "1.7vmin" }}
              letterSpacing={"2px"}
              fontWeight={"600"}
            >
              Contact Us
            </Text>
          </Box>

          <Box display={"flex"} flexDirection={"column"} gap="5px">
            <Box display={"flex"} gap="5px">
              <CallIcon style={{ fontSize: "15px" }} />
              <Text
                fontSize={{ base: "1.7vmin", md: "1.3vmin", lg: "1.7vmin" }}
                letterSpacing={"2px"}
                fontWeight={"600"}
              >
                9665689342
              </Text>
            </Box>
            <Box display={"flex"} gap="5px">
              <EmailIcon style={{ fontSize: "15px" }} />
              <Text
                fontSize={{ base: "1.6vmin", md: "1.3vmin", lg: "1.7vmin" }}
                letterSpacing={"2px"}
                fontWeight={"600"}
              >
                Premjadhav@gmail.com
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
        <Text fontSize={{base:'1.5vmin',md:'1.5vmin',lg:'1.8vmin'}} textAlign={{base:'center',md:'center',lg:'end'}}>Copyright © 2023 , All rights reserved. </Text>
    </Box>
  );
}

export default Footer
