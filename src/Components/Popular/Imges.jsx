import {
  Image,
  Text,
  Box,
  // Button,
  // Modal,
  // ModalBody,
  // ModalOverlay,
  // ModalContent,
  // ModalHeader,
  // useDisclosure,
} from "@chakra-ui/react";
import React from 'react'
import {motion} from 'framer-motion'

const Imges = ({src,name,price,index,w,h,link}) => {
    const textanm = {
      ascren: { rotate: -60, opacity: 1 },
      cscren: {
        rotate: 0,
        opacity: 1,
      },
    };
  return (
    <>
      <a
        style={{ width: w, height: h, maxHeight: h, maxWidth: w }}
        href={`${link}`}
        alt="nothing"
      >
        <Box
          w={w}
          h={h}
          maxW={w}
          maxH={h}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"20px"}
        >
          <Image
            maxW="100%"
            maxH={"100%"}
            w="100%"
            h="100%"
            as={motion.img}
            variants={textanm}
            animate={"ascren"}
            whileInView={"cscren"}
            src={src}
            alt="pic loading"
            key={index}
            mt={{
              base: price === ("₹ 6,998.00" || "$165.00") ? "16px" : 0,
              md: 0,
            }}
          />
          <Box>
            <Text
              w={{ base: "40vw", md: "25vw", lg: "20vw" }}
              textAlign={"center"}
              fontSize={{ base: "3vmin", md: "1.8vmin", lg: "2vmin" }}
            >
              {name}
            </Text>
            <Text
              textAlign={"center"}
              fontWeight={"600"}
              color={"blackAlpha.700"}
              fontSize={{ base: "2.2vmin", md: "1.8vmin", lg: "2vmin" }}
            >
              {price}
            </Text>
          </Box>
        </Box>
      </a>
    </>
  );
}

export default Imges
