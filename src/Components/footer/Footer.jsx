import React from 'react'
import {Box,Text} from '@chakra-ui/react'
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import '../../index.css';

const Footer = () => {
  return (
    <Box
      w="100vw"
      ml="-5rem"
      h="180px"
      mt="3rem"
      _hover={{
        bg: "red.500",
        color: "white",
      }}
    >
      <Box
        h="50px"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        p="2rem"
      >
        <Box>
          <Text
            textAlign={"start"}
            ml="15px"
            fontSize={"2vmin"}
            letterSpacing={"12px"}
            fontWeight={"600"}
          >
            WATCH COMPANY
          </Text>
        </Box>
        <Box display={"flex"} alignItems={"center"} gap="20px">
          <Box>
            <Text fontSize={"1.7vmin"} letterSpacing={"2px"} fontWeight={"600"}>
              About Us
            </Text>
            <Text fontSize={"1.7vmin"} letterSpacing={"2px"} fontWeight={"600"}>
              Contact Us
            </Text>
          </Box>

          <Box display={"flex"} flexDirection={"column"} gap="5px">
            <Box display={"flex"} gap="5px">
              <CallIcon style={{ fontSize: "15px" }} />
              <Text
                fontSize={"1.7vmin"}
                letterSpacing={"2px"}
                fontWeight={"600"}
              >
                9665689342
              </Text>
            </Box>
            <Box display={"flex"} gap="5px">
              <EmailIcon style={{ fontSize: "15px" }} />
              <Text
                fontSize={"1.7vmin"}
                letterSpacing={"2px"}
                fontWeight={"600"}
              >
                Premjadhav@gmail.com
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer
