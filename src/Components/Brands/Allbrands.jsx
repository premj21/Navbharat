import { Box, Image,Text } from '@chakra-ui/react'
import React from 'react'
import a from '../assets/AJANTA.png'
import b from '../assets/Casio_logo_PNG1.png'
import c from "../assets/Fastrack_logo.png";
import d from '../assets/Fossil_logo_PNG2.png'
import f from '../assets/Giordano_logo_PNG1.png'
import g from '../assets/Guess_logo_PNG1.png';
import h from '../assets/KAIROS.png'
import i from '../assets/KAISER.png';
import j from '../assets/MAXIMA.webp'
import k from '../assets/OREVA.jpg'
import l from '../assets/Pebble_Logo-2.avif'
import m from '../assets/Police_logo_PNG1.png'
import n from '../assets/Rado_logo_PNG1.png';
import o from '../assets/SAGE.png'
import p from '../assets/Seiko_logo_PNG1.png'
import q from '../assets/Timex_logo_PNG7.png'
import r from '../assets/Titan-Logo-PNG.png'
import s from '../assets/Tommy_hilfiger_logo_PNG1.png'
import t from '../assets/boAt_logo_small.svg'
import u from '../assets/firebolt.webp'
import v from '../assets/noise.webp'
import w from '../assets/logues.webp'
import x from '../assets/scientific-clock-mfg-co-120x120.jpg'
import y from '../assets/sonata.avif'
import { motion} from 'framer-motion'


const Allbrands = () => {
    const logo= [
        a,b,c,d,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,
    ];
    
     const textanm = {
       ascren: { y:70, opacity: 0.6 },
       cscren: {
        y:0,
         opacity: 1,
         transition: {
           duration:1.5,
           delay:0.1
         },
       },
     };
  return (
    <>
      <Box
        maxW={"100vw"}
        w="100vw"
        m="3rem 0"
        ml={{ lg: "-5rem" }}
        bg="white"
        boxShadow="0px 5px 20px rgba(255, 251, 251, 0.1)"
        p="10px"
      >
        <Text
          position={"relative"}
          top={{ base: "-5", md: "3", lg: "2" }}
          fontSize={{ base: "6vmin", lg: "6vmin" }}
          textAlign={"center"}
          fontWeight={{ base: "200", md: "300" }}
          opacity={"0.09"}
          letterSpacing={{ base: "15px", md: "22px", lg: "30px" }}
        >
          ALLBRANDS
        </Text>
        <Text
          position={"relative"}
          top="-50"
          letterSpacing={{ base: "10px", md: "8px", lg: "7px" }}
          textAlign={"center"}
          fontSize={{ md: "4vmin", lg: "4vmin" }}
          fontWeight="400"
        >
          ALL BRANDS
        </Text>
      </Box>




      <Box
        h="fit-content"
        overflowX="hidden"
        w={{ base: "100vw", md: "100vw", lg: "90vw" }}
        display={"flex"}
        flexWrap={"wrap"}
        alignItems={{ base: "center", lg: "start" }}
        justifyContent={"center"}
        gap={{ base: "3rem", md: "4rem" }}
      >
        {logo.map((item, index) => (
          <Image
            as={motion.img}
            variants={textanm}
            animate="ascren"
            whileInView="cscren"
            src={item}
            maxW={{ base: "15%", md: "8%" }}
            alt="logo loading"
            key={index}
          />
        ))}
      </Box>
    </>
  );
}
export default Allbrands
