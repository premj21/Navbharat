import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import a from './pexels-jess-bailey-designs-1162519.jpg';
import b from './wow.jpg'
import d from './last.jpeg'
import e from './pexels-ruslan-alekso-1401847.jpg'
import f from './one (1).jpg'
import g from './tow.jpg'
import {motion} from 'framer-motion'


 

const Showcaseimg = () => {
     const textanm = {
       ascren: { x: 200, opacity: 0 },
       cscren: {
         x: 0,
         opacity: 1,
         transition: {
           when: "beforeChildren",
           staggerChildren: 0.4,
         },
       },
     };
  return (
    <Box
      zIndex={300}
      maxW="100vw"
      w="100vw"
      h={{ base: "900px", md: "60vh", lg: "80vh" }}
      ml={{ lg: "-5rem" }}
      display={"flex"}
      flexDir={{ base: "column", md: "row" }}
      as={motion.div}
      variants={textanm}
      animate={"cscren"}
      initial={"ascren"}
    >
      <Image
        as={motion.img}
        variants={textanm}
        w={{ base: "100vw", md: "25vw" }}
        h={{ base: "200px", md: "100%" }}
        src={a}
        alt="no image"
      />
      <Box display={"flex"} flexDir={{ base: "row", md: "column" }}>
        <Image
          as={motion.img}
          variants={textanm}
          w={{ base: "50vw", md: "20vw" }}
          h={{ base: "200px", md: "50%" }}
          src={g}
          alt="no image"
        />
        <Image
          as={motion.img}
          variants={textanm}
          w={{ base: "50vw", md: "20vw" }}
          h={{ base: "200px", md: "50%" }}
          src={e}
          alt="no image"
        />
      </Box>
      <Image
        as={motion.img}
        variants={textanm}
        w={{ base: "80vw", md: "22vw" }}
        h={{ base: "200px", md: "100%" }}
        src={f}
        alt="no image"
      />

      <Box display={"flex"} flexDir={{ base: "row", md: "column" }}>
        <Image
          zIndex={300}
          as={motion.img}
          variants={textanm}
          w={{ base: "50vw", md: "32vw" }}
          h={{ base: "200px", md: "50%" }}
          src={b}
          alt="no image"
        />
        <Image
          zIndex={300}
          as={motion.img}
          variants={textanm}
          w={{ base: "50vw", md: "32vw" }}
          h={{ base: "200px", md: "50%" }}
          src={d}
          alt="no image"
        />
      </Box>
    </Box>
  );
}
export default Showcaseimg
