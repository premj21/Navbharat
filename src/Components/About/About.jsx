import React from 'react'
import {Box,Image,Text} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import main from './bigmimt.jpg'
import a  from './NEWmal/first.JPG'
import b from "./NEWmal/second.JPG";
import c from "./NEWmal/third.JPG";
import d from "./NEWmal/four.JPG";
import e from "./NEWmal/five.JPG";
import f from "./NEWmal/six.JPG";
import g from "./NEWmal/seven.JPG";






const About = () => {


   const textanm = {
     ascren: {
       y: 100,
       opacity: 0,
     },
     cscren: {
       y: 0,
       opacity: [
         0.1, 0.1, 0.2, 0.2, 0.3, 0.3, 0.4, 0.4, 0.5, 0.5, 0.6, 0.6, 0.7, 0.7,
         0.8, 0.8, 0.9, 0.9, 1, 1,
       ],
       transition: {
         duration: 1.4,
         delay: 0,
       },
     },
   };

   


  return (
    <Box
      w="100vw"
      ml={{ lg: "-5rem" }}
      // p="0 5vw"
      h="100vh"
      gap="2rem"
    >
      <Box w="100%" h="100%" mb="-3rem">
        <Image src={main} h="90%" w="100%" />
      </Box>
    
    <Box
    w='100vw'
    h='auto'
    display={'flex'}
    flexDir={'column'}
    alignItems={'center'}
    justifyContent={'center'}
    
    >

      {[a, b, c, d, e, f, g].map((item, index) => (
        <Box
          w={{ base: "90vw", md: "80vw" }}
          h="80vh"
          display={"flex"}
          flexDir={{ base: "column", md: "row" }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Image
            order={{ lg: index % 2 === 0 ? "1" : "2" }}
            as={motion.img}
            variants={textanm}
            animate="ascren"
            whileInView="cscren"
            borderRadius={"10px"}
            w={{ base: "100%", md: "45%" }}
            h="60%"
            src={item}
            alt="nothing"
            boxShadow={"0px 5px 20px rgba(0,0,0,0.180)"}
          />
          <Box
            w={{ base: "100%", md: "50%" }}
            display={"flex"}
            flexDir={"column"}
            p="2rem"
            order={{ lg: index % 2 === 0 ? "2" : "1" }}
          >
            <Text textAlign={"start"} ml="1rem" fontSize={"6vmin"}>
              2023
            </Text>
            <Text textAlign={"start"} fontSize={"3vmin"} fontWeight={"500"}>
              Rahul Jeurkar and sons haha
            </Text>
            <Text w={{ base: "100%", md: "90%" }} textAlign={"start"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A iure
              suscipit quod impedit, fugiat quasi laboriosam officiis velit
              aperiam, ipsum numquam obcaecati non voluptates assumenda, unde
              natus repellat debitis dignissimos.
            </Text>
          </Box>
        </Box>
      ))}
      </Box>
    </Box>
  );
}

export default About
