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
            mt={{ base: price === ("₹ 6,998.00" || "$165.00") ? "16px" : 0 ,md:0}}
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

        {/* <Modal
        w="70vw"
        h="60vh"
        blockScrollOnMount={false}
        onClose={onClose}
        isOpen={isOpen}
      >
        <ModalOverlay backdropFilter="auto" backdropBlur="2px" />
        <ModalContent
          minW="50vw"
          h="80vh"
          boxShadow={"0px 5px 20px rgba(0,0,0,0.100)"}
          bg="red"
          p='2rem'
        >
          <ModalHeader textAlign={"center"} color={"white"}>
            {name}
          </ModalHeader>
          <ModalBody>
            <Box p="3rem" w="100%" h="100%" display={"flex"} gap="10%">
              <Box
                w="45%"
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Image
                  w={'100%'}
                  h={'100%'}
              
                  boxShadow={"0px 5px 20px rgba(0,0,0,0.120)"}
                  src={src}
                  alt="pic loading"
                  key={index}
                />
              </Box>
              <Box
                w="45%"
                h="100%"
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                flexDir={"column"}
                gap="20px"
              >
                <Text
                  textAlign={"center"}
                  fontSize={{ base: "3vmin", md: "2vmin", lg: "4vmin" }}
                  color={"white"}
                >
                  {name}
                </Text>
                <Text fontWeight={"600"} color={"white"}>
                  {price}
                </Text>
                <Button w="80%" variant={"solid"} bg="white">
                  Watch
                </Button>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal> */}
      </a>
    </>
  );
}

export default Imges
