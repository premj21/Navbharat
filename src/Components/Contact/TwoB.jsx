/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { Box } from "@chakra-ui/react";
import HomeIcon from "@mui/icons-material/Home";
import WifiCallingIcon from "@mui/icons-material/WifiCalling";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { AspectRatio, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const TwoB = () => {
  const textanm = {
    ascren: { x: 200, opacity: 0 },
    cscren: {
      x: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };
  return (
    <>
      <Box
        w="100%"
        display={"flex"}
        flexDir={{ base: "column", md: "row" }}
        justifyContent={"center"}
      >
        <Box w={{ base: "100%", md: "55%" }} p="2rem" h="100%">
          <AspectRatio ratio={{ base: 10 / 6, md: 10 / 5, lg: 9 / 4 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.493693580057!2d75.91955229999999!3d17.6741232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5dbd45626eec9%3A0xbcfd8109950362fb!2sNavbharat%20watch%20company!5e0!3m2!1sen!2sin!4v1683087854871!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{
                boxShadow: "0px 5px 20px rgba(0,0,0,0.140)",
                width: "100%",
                height: "100%",
              }}
              allowfullscreen="Yes"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </AspectRatio>
        </Box>

        <Box
          w={{ base: "100%", md: "40%" }}
          h="100%"
          p="2rem"
          display={"flex"}
          flexDir={"column"}
          gap="30px"
          alignItems={"start"}
          as={motion.div}
          variants={textanm}
          animate="ascren"
          whileInView="cscren"
        >
          <Box as={motion.div} variants={textanm} display={"flex"} gap="20px">
            <HomeIcon style={{ fontSize: "30px" }} />
            <Box display={"flex"} flexDirection={"column"} gap="5px">
              <Text fontSize={{ md: "1.5vmin", lg: "2vmin" }}>
                Maharashtra , India
              </Text>
              <Text
                color={"blackAlpha.500"}
                fontSize={{ md: "1.5vmin", lg: "2vmin" }}
              >
                Solapur , 413001
              </Text>
            </Box>
          </Box>

          <Box as={motion.div} variants={textanm} display={"flex"} gap="20px">
            <WifiCallingIcon style={{ fontSize: "30px" }} />
            <Box display={"flex"} flexDirection={"column"} gap="5px">
              <Text
                fontSize={{ md: "1.5vmin", lg: "2vmin" }}
                letterSpacing={"3px"}
              >
                +91 9665689342
              </Text>
              <Text
                fontSize={{ md: "1.5vmin", lg: "2vmin" }}
                color={"blackAlpha.500"}
              >
                Mon to Fri 9am to 6pm
              </Text>
            </Box>
          </Box>

          <Box as={motion.div} variants={textanm} display={"flex"} gap="20px">
            <MailOutlineIcon style={{ fontSize: "30px" }} />
            <Box display={"flex"} flexDirection={"column"} gap="5px">
              <Text
                fontSize={{ md: "1.5vmin", lg: "2vmin" }}
                letterSpacing={"3px"}
              >
                PremJadhav378@gmail.com
              </Text>
              <Text
                fontSize={{ md: "1.5vmin", lg: "2vmin" }}
                color={"blackAlpha.500"}
              >
                Ask your Query any time
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TwoB;
