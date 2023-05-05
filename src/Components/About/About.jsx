import React from 'react'
import {Box,Image,Text} from '@chakra-ui/react'
import first from './first.jpg'
import second from './second.jpg'
import third from './third.jpg'
import { motion } from 'framer-motion'

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
    <Box w="100vw" ml={{ lg: "-5rem" }} p="0 5vw" h="80vh" mt="1rem" gap="2rem">
      <Box
        w="80vw"
        h="80vh"
        display={"flex"}
        flexDir={{base:"column",md:'row'}}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image
          as={motion.img}
          variants={textanm}
          animate="ascren"
          whileInView="cscren"
          borderRadius={"10px"}
          w="45%"
          h="60%"
          src={first}
          alt="nothing"
          boxShadow={"0px 5px 20px rgba(0,0,0,0.180)"}
        />
        <Box w="50%" display={"flex"} flexDir={"column"} p="2rem">
          <Text textAlign={"start"} ml="1rem" fontSize={"6vmin"}>
            2023
          </Text>
          <Text textAlign={"start"} fontSize={"3vmin"} fontWeight={"500"}>
            Rahul Jeurkar and sons haha
          </Text>
          <Text w="90%" textAlign={"start"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A iure
            suscipit quod impedit, fugiat quasi laboriosam officiis velit
            aperiam, ipsum numquam obcaecati non voluptates assumenda, unde
            natus repellat debitis dignissimos.
          </Text>
        </Box>
      </Box>
      <Box
        w="80vw"
        h="80vh"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image
          order={2}
          as={motion.img}
          variants={textanm}
          animate="ascren"
          whileInView="cscren"
          borderRadius={"10px"}
          w="45%"
          h="60%"
          src={second}
          alt="nothing"
          boxShadow={"0px 5px 20px rgba(0,0,0,0.180)"}
        />
        <Box order={1} w="50%" display={"flex"} flexDir={"column"} p="2rem">
          <Text textAlign={"start"} ml="1rem" fontSize={"6vmin"}>
            2023
          </Text>
          <Text textAlign={"start"} fontSize={"3vmin"} fontWeight={"500"}>
            Rahul Jeurkar and sons haha
          </Text>
          <Text w="90%" textAlign={"start"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A iure
            suscipit quod impedit, fugiat quasi laboriosam officiis velit
            aperiam, ipsum numquam obcaecati non voluptates assumenda, unde
            natus repellat debitis dignissimos.
          </Text>
        </Box>
      </Box>
      <Box
        w="80vw"
        h="80vh"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image
          as={motion.img}
          variants={textanm}
          animate="ascren"
          whileInView="cscren"
          borderRadius={"10px"}
          w="45%"
          h="60%"
          src={third}
          alt="nothing"
          boxShadow={"0px 5px 20px rgba(0,0,0,0.180)"}
        />
        <Box w="50%" display={"flex"} flexDir={"column"} p="2rem">
          <Text textAlign={"start"} ml="1rem" fontSize={"6vmin"}>
            2023
          </Text>
          <Text textAlign={"start"} fontSize={"3vmin"} fontWeight={"500"}>
            Rahul Jeurkar and sons haha
          </Text>
          <Text w="90%" textAlign={"start"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A iure
            suscipit quod impedit, fugiat quasi laboriosam officiis velit
            aperiam, ipsum numquam obcaecati non voluptates assumenda, unde
            natus repellat debitis dignissimos.
          </Text>
        </Box>
      </Box>

      <Box
        w="80vw"
        h="80vh"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image
        order={2}
          as={motion.img}
          variants={textanm}
          animate="ascren"
          whileInView="cscren"
          borderRadius={"10px"}
          w="45%"
          h="60%"
          src={first}
          alt="nothing"
          boxShadow={"0px 5px 20px rgba(0,0,0,0.180)"}
        />
        <Box 
        order={1}
        w="50%" display={"flex"} flexDir={"column"} p="2rem">
          <Text textAlign={"start"} ml="1rem" fontSize={"6vmin"}>
            2023
          </Text>
          <Text textAlign={"start"} fontSize={"3vmin"} fontWeight={"500"}>
            Rahul Jeurkar and sons haha
          </Text>
          <Text w="90%" textAlign={"start"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A iure
            suscipit quod impedit, fugiat quasi laboriosam officiis velit
            aperiam, ipsum numquam obcaecati non voluptates assumenda, unde
            natus repellat debitis dignissimos.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default About
