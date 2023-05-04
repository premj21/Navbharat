import { Box, Text, Image, keyframes } from "@chakra-ui/react";
import React from 'react'
import watch from '../assets/watch.png.webp'
import Popular from "../Popular/Popular";
import Allbrands from "../Brands/Allbrands";
import Curstomer from "../CustomerR/Curstomer";
import Footer from "../footer/Footer";



 const prem = keyframes`
    from{
       scale:0.9;
       opacity :0.9;
    }
    to{
      scale:1.2;
      opacity: 1;
    } `;

const Home = () => {

   

  // const opnt = {
  //   initial: {
  //     opacity: 0.7,
  //     scale:0.8
  //   },
  //   whileInView: {
  //     opacity: 1,
  //     scale:5
  //   },
  // };

 



  const myanimation = `${prem} 1 2s`

  return (
    <>
      <Box
        h={{ base: "70vh", md: "80%", lg: "100%" }}
        w="100%"
        overflowY={"hidden"}
        display={"flex"}
        boxShadow="0px 5px 20px rgba(0,0,0,0.100)"
      >
        <Box
          w={{ base: "100%", md: "70%" }}
          h="100%"
          display={"flex"}
          flexDir={"column"}
          pl="10%"
          alignItems={"flex-start"}
          justifyContent={"center"}
        >
          <Text
            fontSize={"12vmin"}
            fontWeight={"700"}
            letterSpacing="2px"
            lineHeight={"110%"}
            color={"#0b1c39"}
          >
            Select Your New Perfect Style
          </Text>
          <Text
            w="80%"
            mt="3%"
            letterSpacing="1px"
            fontSize={{ base: "2.9vmin", md: "2.1vmin" }}
            whiteSpace={"12px"}
          >
            here will be the description of the video and the image and the best
            and the huihui and lmade log huihui escape the matrix bitchhh
          </Text>
        </Box>
        <Box w="30%" h="100%" display={{ base: "none", md: "flex" }}>
          <Box
            h="100%"
            display={"flex"}
            alignItems={"flex-end"}
            justifyContent={"start"}
          >
            <Image animation={myanimation} src={watch} h="100%" />
          </Box>
        </Box>
      </Box>
      <Box w="100%" h="fit-content">
        <Popular />
      </Box>
      <Allbrands />
      <Box
        maxW={"100vw"}
        w="100vw"
        mt="3rem"
        ml={{ lg: "-5rem" }}
        bg="white"
        boxShadow="0px 5px 20px rgba(255, 251, 251, 0.1)"
        p="10px"
      >
        <Text
          position={"relative"}
          top={{ base: "-6", md: "1", lg: "2" }}
          fontSize={{ base: "5vmin", lg: "6vmin" }}
          textAlign={"center"}
          fontWeight={{ base: "300", md: "300" }}
          opacity={"0.09"}
          letterSpacing={{ base: "10px", md: "22px", lg: "30px" }}
        >
          WHATCUSTOMERSAY
        </Text>
        <Text
          position={"relative"}
          top="-50"
          letterSpacing={{ base: "6px", md: "8px", lg: "7px" }}
          textAlign={"center"}
          fontSize={{ md: "4vmin", lg: "4vmin" }}
          fontWeight="300"
        >
          WHAT CUSTOMER SAY
        </Text>
      </Box>

      <Box
        w="100%"
        h={{base:"180px",md:'190px',lg:'200px'}}
        display={"flex"}
        gap="5%"
        mb="5rem"
        overflowX={"scroll"}
        p="10px"
        pb="10px"
      >
        <Curstomer />
        <Curstomer />
        <Curstomer />
        <Curstomer />
        <Curstomer />
        <Curstomer />
        <Curstomer />
        <Curstomer />
        <Curstomer />
      </Box>
      <Footer />
    </>
  );
}

export default Home