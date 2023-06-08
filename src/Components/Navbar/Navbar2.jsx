import React from 'react'
import {Box,Image,Text} from '@chakra-ui/react'
import pic from "../assets/navbharat logo copy.png";
import { useNavigate } from 'react-router-dom';
import HomeIcon from "@mui/icons-material/Home";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

const Navbar2 = () => {
    const navigate = useNavigate(); 
  return (
    <Box w="90vw" display={"flex"}>
      <Box position={"fixed"} w="20vw" top={5} left={10}>
        <Image
          onClick={() => navigate("/")}
          cursor={'pointer'}
          zIndex={10000000000}
          w="35%"
          h="20%"
          src={pic}
          alt="nothing"
        />
      </Box>
      <Box
        display={"flex"}
        flexDir={"column"}
        gap="30px"
        position={"fixed"}
        top={5}
        right={20}
        zIndex={100000}
      >
        <HomeIcon
          style={{ fontSize: "1.8rem", color: "#6e433f", cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
        <AiOutlineExclamationCircle
          style={{ fontSize: "1.8rem", color: "#6e433f", cursor: "pointer" }}
          onClick={() => navigate("/About")}
        />
        <PermContactCalendarIcon
          style={{ fontSize: "1.8rem", color: "#6e433f", cursor: "pointer" }}
          onClick={() => navigate("/contact")}
        />
        {/* <Text
          textAlign={"end"}
          _hover={{
            fontSize: "2.3vmin",
            fontWeight: "600",
            textAlign: "center",
          }}
          fontSize={{ base: "3vmin", md: "2.2vmin" }}
          letterSpacing={"3.5px"}
          cursor={"pointer"}
          onClick={() => navigate("/")}
        >
          Home
        </Text> */}
        {/* <Text
          textAlign={"end"}
          _hover={{
            fontSize: "2.3vmin",
            fontWeight: "600",
            textAlign: "center",
          }}
          fontSize={{ base: "3vmin", md: "2.2vmin" }}
          cursor={"pointer"}
          letterSpacing={"3.5px"}
          onClick={() => navigate("/About")}
        >
          About
        </Text> */}
        {/* <Text
          textAlign={"end"}
          _hover={{
            fontSize: "2.3vmin",
            fontWeight: "600",
            textAlign: "center",
          }}
          fontSize={{ base: "3vmin", md: "2.2vmin" }}
          cursor={"pointer"}
          letterSpacing={"3.5px"}
          onClick={() => navigate("/contact")}
        >
          Contact
        </Text> */}
      </Box>
    </Box>
  );
}

export default Navbar2
