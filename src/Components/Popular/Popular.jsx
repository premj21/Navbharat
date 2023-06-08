import { Box,Text } from '@chakra-ui/react'
import React from 'react'
import Imges from './Imges';
import a from './one.png';
import b from "./two.png";
import c from "./three.avif";
import d from "./four.png";
import e from "./five.png";
import f from "./six.png";

const Popular = () => {
    const data = [
      {
        src: a,
        price: "₹ 21,495.00",
        name: "Townsman Automatic Black Stainless Steel",
        w: "100%",
        h: "100%",
        link: "https://www.fossil.com/en-in/products/44mm-townsman-automatic-black-stainless-steel-watch/ME3197I.html",
      },
      {
        src: b,
        w: "80%",
        h: "100%",
        price: "₹ 6,998.00",
        name: "Silicone Giordano Analog Blue Dial",
        link: "https://www.indiamart.com/proddetail/giordano-analog-blue-dial-men-s-watch-17951733691.html",
      },
      {
        src: c,
        w: "100%",
        h: "100%",
        price: "₹ 42,995.00",
        name: "GM-B2100GD-9A",
        link: "https://www.casio.com/in/watches/gshock/product.GM-B2100GD-9A/",
      },
      {
        src: d,
        w: "105%",
        h: "100%",
        price: "₹ 13,495.00",
        name: "Jacqueline Sun Moon Multifunction Gold-Tone",
        link: "https://www.fossil.com/en-in/products/jacqueline-sun-moon-multifunction-gold-tone-stainless-steel-watch/ES5167.html",
      },

      {
        src: e,
        price: "₹ 122,100.00",
        w: "105%",
        h: "100%",
        name: "Rado Diastar gents automatic",
        link: "https://www.rado.com/the-original-automatic-cvd-coated-hardmetal-other-35mm-r12413503.html",
      },
      {
        src: f,
        w: "105%",
        h: "105%",
        price: "₹ 19,995.00",
        name: "Titan Automatic Blue Dial Watch",
        link: "https://www.titan.co.in/product/titan-blue-dial-hand-wound-watch-for-men-1797kl02f",
      },
    ];     
  return (
    <>
      <Box
        maxW={"100vw"}
        overflowX={'hidden'}
        w="100vw"
        mt="3rem"
        ml={{ lg: "-5rem" }}
        bg="white"
        boxShadow="0px 5px 20px rgba(255, 251, 251, 0.120)"
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
          POPULARITEMS
        </Text>
        <Text
          position={"relative"}
          top="-50"
          letterSpacing={{ base: "10px", md: "8px", lg: "11px" }}
          textAlign={"center"}
          fontSize={{ md: "4vmin", lg: "4vmin" }}
          fontWeight="400"
        >
          POPULAR ITEMS
        </Text>
      </Box>
      <Box
        maxW="100vw"
        p="5%"
        overflowX={"hidden"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"} 
        flexWrap={"wrap"}
        gap="16%"
        // border={'1px solid black'}
      >
        {data.map((itme, index) => (
          <Box
            
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
            mt={{ md: "-2rem" }}
            mb="4rem"
            w={{ base: "40%", md: "22%", lg: "18%" }}
            h="20%"
           
          >
              <Imges
                link={itme.link}
                w={itme.w}
                h={itme.h}
                src={itme.src}
                name={itme.name}
                price={itme.price}
                index={index}
              />
          </Box>
        ))}
      </Box>
    </>
  );
}

export default Popular
