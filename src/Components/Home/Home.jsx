import { Box, Text, Image } from "@chakra-ui/react";
import React from 'react'
import watch from '../assets/watch.png.webp'
import Popular from "../Popular/Popular";
import Allbrands from "../Brands/Allbrands";
import Curstomer from "../CustomerR/Curstomer";
import Footer from "../footer/Footer";
import vid from './Navbhst.mp4';
import Showcaseimg from "../Showcase/Showcaseimg";


//  const prem = keyframes`
//     from{
//        scale:0.9;
//        opacity :0.9;
//     }
//     to{
//       scale:1.2;
//       opacity: 1;
//     } `;



  const Home = () => {

  const custmd = [
    {
      name: "Ganesh Goski",
      msg: "You can get the quality products and assured branded products of watches in shop they  have variety of watches and they are very good you should buy watches in this shop",
    },
    {
      name: "Rutvik Chavan",
      msg: "Best shop to buy watches with affordable prices",
    },
    {
      name: "Rahul Gawas",
      msg: "Nice place for watch lovers,decent watches at decent priceI recently purchased an casio enticer series watch, well satisfied5 stars when some luxury brands are also available",
    },
    {
      name: "Vijay Thombre",
      msg: "Excellent ServiceI have purchased a wristwatch in 2008 and went in 2019 to change its belt.The owner and staff recognized that the watch was purchased from their shop.The staff is helpful and humble.I would prefer this shop to buy a watch rather than purchasing it online.",
    },
    {
      name: "Abhishek Kongari",
      msg: "The best shop to buy branded watches with good variety",
    },
    {
      name: "rahim mokashi",
      msg: "in Solapur city the first watch shop which provides international brands watches",
    },
  ];




   

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
  // const myanimation = `${prem} 1 2s`

  return (
    <>
      <Box
        h={{ base: "70vh", md: "80%", lg: "100%" }}
        w={{base:'100%',md:"100vw"}}
        ml={{lg:'-5rem'}}
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
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
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
            <Image  src={watch} h="100%" />
          </Box>
        </Box>
      </Box>

      

      <Showcaseimg />
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
          letterSpacing={{ base: "6px", md: "8px", lg: "11px" }}
          textAlign={"center"}
          fontSize={{ md: "4vmin", lg: "4vmin" }}
          fontWeight="400"
        >
          WHAT CUSTOMER SAY
        </Text>
      </Box>
      <Box
        w="100%"
        h={{ base: "180px", md: "190px", lg: "200px" }}
        display={"flex"}
        gap="5%"
        mb="5rem"
        overflowX={"scroll"}
        p="10px"
        pb="10px"
      >
        {custmd.map((item, index) => (
          <Curstomer key={index} name={item.name} msg={item.msg} />
        ))}
      </Box>

      <Box
        w="100vw"
        h={{ base: "20vh", md: "40vh", lg: "67vh" }}
        ml={{ lg: "-5rem" }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <video
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1500"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            boxShadow: "0px 5px 20px rgba(0,0,0,0.130)",
          }}
          src={vid}
          autoPlay
          loop
          muted
          controlsList="nodownload nofullscreen noremoteplayback noaudio"
        ></video>
      </Box>
      <Footer />
    </>
  );
}

export default Home;
