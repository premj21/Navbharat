import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "../../index.css";
import logo from "./companylogo.png";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box w="100vw" mb="2rem" ml={{ lg: "-5rem" }} display={"flex"} gap="3vw">
      <Box
        w="30vw"
        display={"flex"}
        flexDir={"column"}
        alignItems="center"
        justifyContent={{ base: "center", md: "flex-start" }}
        gap={{ base: "10px", md: "20px" }}
        p="2rem"
      >
        <Box
          w="100%"
          display={"flex"}
          flexDir={"column"}
          alignItems={{ base: "flex-start", md: "center" }}
          justifyContent={{ base: "flex-start", md: "center" }}
        >
          <Image
         
            src={logo}
            height={{ base: "100%", md: "100%", lg: "80%" }}
            width={{ base: "100%", md: "100%", lg: "70%" }}
            alt="logo"
          />
        </Box>

        <Text
          fontSize={{ base: "2vmin", md: "1rem" }}
          textAlign={"start"}
          fontWeight={600}
          letterSpacing={{ base: "1px", md: "5px" }}
          onClick={() => navigate("/About")}
          cursor={"pointer"}
          _hover={{ color: "red" }}
        >
          About-Us
        </Text>
        <Text
          fontSize={{ base: "2vmin", md: "1rem" }}
          onClick={() => navigate("/contact")}
          cursor={"pointer"}
          _hover={{ color: "red" }}
          fontWeight={600}
          letterSpacing={{ base: "0px", md: "5px" }}
        >
          Contact-Us
        </Text>
      </Box>

      <Box
        w="30vw"
        display={"flex"}
        flexDir={"column"}
        alignItems={"flex-start"}
        justifyContent={{ base: "flex-start", md: "flex-start" }}
        flexWrap={"flex"}
        gap={{ base: "10px", md: "20px" }}
        pt={{ base: "2rem", md: "3rem" }}
      >
        <Text
          fontSize={{ base: "1.7vmin", md: "1.3vmin", lg: "1.7vmin" }}
          letterSpacing={"2px"}
          fontWeight={"600"}
          display={"flex"}
        >
          <LocationOnIcon style={{ fontSize: "15px", marginRight: "5px" }} />
          670, South Kasba, Navi Peth, Choupad, Maharashtra 413001
        </Text>
        <Text
          fontSize={{ base: "1.7vmin", md: "1.3vmin", lg: "1.7vmin" }}
          letterSpacing={"2px"}
          fontWeight={"600"}
        >
          <LocationOnIcon style={{ fontSize: "15px", marginRight: "5px" }} />
          670, South Kasba, Navi Peth, Choupad, Maharashtra 413001
        </Text>
        <Text
          fontSize={{ base: "1.7vmin", md: "1.3vmin", lg: "1.7vmin" }}
          letterSpacing={"2px"}
          fontWeight={"600"}
        >
          <CallIcon style={{ fontSize: "15px", marginRight: "5px" }} />
          966568893452
        </Text>
        <Text
          fontSize={{ base: "1.7vmin", md: "1.3vmin", lg: "1.7vmin" }}
          letterSpacing={"2px"}
          fontWeight={"600"}
        >
          <EmailIcon style={{ fontSize: "15px", marginRight: "5px" }} />
          Premjadhav@gmail.com
        </Text>
      </Box>

      <Box
        w="30vw"
        display={"flex"}
        flexDir={"column"}
        alignItems={{ base: "flex-start", md: "center" }}
        flexWrap={"wrap"}
        justifyContent={{ base: "flex-start", md: "flex-start" }}
        pt={{ base: "2rem", md: "2.5rem" }}
        gap={{ base: "10px", md: "20px" }}
      >
        <Text
          fontSize={{ base: "2vmin", md: "2vmin" }}
          fontWeight={"600"}
          letterSpacing={"10px"}
        >
          About Company
        </Text>
        <Text
          fontSize={{ base: "1.3vmin", md: "1.4vmin" }}
          letterSpacing={"3px"}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod libero
          magni reprehenderit nesciunt corporis! Dicta delectus tempore,
          praesentium quasi laborum autem esse laudantium totam consequuntur.
        </Text>
        <Text
          fontSize={{ base: "1.3vmin", md: "1.4vmin" }}
          letterSpacing={"3px"}
        >
          Copyright ©2023 , All rights reserved.
        </Text>
      </Box>
    </Box>

    // <Box
    //   w="100vw"
    //   ml={{ lg: "-5rem" }}
    //   mt={{ base: "-3rem", md: "0" }}
    //   p={{ base: "1.3rem", md: "2.6rem", lg: "2rem 2rem 1rem 2rem" }}
    //   display={"flex"}
    //   flexDir={"column"}
    //   gap="28px"
    // >
    //   <Box
    //     display={"flex"}
    //     alignItems={"center"}
    //     justifyContent={"center"}
    //     gap={{ base: "20px", md: "50px" }}
    //   >
    //     <Box w={{ base: "20vw", md: "30vw", lg: "25vw" }}>
    //       <img
    //         src={logo}
    //         height="20%"
    //         width="33%"
    //         alt="logo"
    //         ml="10px"
    //         p="2rem"
    //       />

    //       <Text
    //         w="30vw"
    //         textAlign={"start"}
    //         ml="5px"
    //         mr="15px"
    //         fontSize={{ base: "1.2vmin", md: "3vmin" }}
    //         letterSpacing={"12px"}
    //         fontWeight={"600"}
    //         p="1rem 0rem 0rem 0rem"
    //       >
    //         WATCH COMPANY
    //       </Text>
    //       <br />
    //       <Box w="35vw">
    //         <Text
    //           ml="6px"
    //           fontSize={{ base: "1.7vmin", md: "1.3vmin", lg: "1.7vmin" }}
    //           letterSpacing={"2px"}
    //           fontWeight={"600"}
    //           p={{ base: "0.3rem", md: "0.7rem", lg: "1rem" }}
    //           onClick={(e) => navigate("/About")}
    //           cursor={"pointer"}
    //         >
    //           About Us
    //         </Text>
    //         <Text
    //           ml="6px"
    //           fontSize={{ base: "1.7vmin", md: "1.3vmin", lg: "1.7vmin" }}
    //           letterSpacing={"2px"}
    //           fontWeight={"600"}
    //           p={{ base: "0.3rem", md: "0.7rem", lg: "0rem 1rem 1rem 1rem" }}
    //           onClick={(e) => navigate("/Contact")}
    //           cursor={"pointer"}
    //         >
    //           Contact Us
    //         </Text>
    //       </Box>
    //     </Box>

    //     <Box display={"flex"} alignItems={"center"} gap="20px">
    //       <Box w="35vw">
    //         <Text
    //           mt="4rem"
    //           fontSize={{ base: "1.7vmin", md: "1.3vmin", lg: "1.7vmin" }}
    //           letterSpacing={"2px"}
    //           fontWeight={"600"}
    //           // p={{ base: "0.5rem", md: "0rem", lg: "1rem" }}
    //         >
    //           <LocationOnIcon style={{ fontSize: "15px" }} />
    //           670, South Kasba, Navi Peth, Choupad, Maharashtra 413001
    //         </Text>
    //         <Text
    //           fontSize={{ base: "1.7vmin", md: "1.3vmin", lg: "1.7vmin" }}
    //           letterSpacing={"2px"}
    //           fontWeight={"600"}
    //           p={{ base: "0.5rem", md: "0rem", lg: "0rem 1rem 1rem 1rem" }}
    //         >
    //           <LocationOnIcon style={{ fontSize: "15px" }} />
    //           670, South Kasba, Navi Peth, Choupad, Maharashtra 413001
    //         </Text>
    //         <Text
    //           fontSize={{ base: "1.7vmin", md: "1.3vmin", lg: "1.7vmin" }}
    //           letterSpacing={"2px"}
    //           fontWeight={"600"}
    //           p={{ base: "0.5rem", md: "0.7rem", lg: "0rem 1rem 1rem 1rem" }}
    //         >
    //           <CallIcon style={{ fontSize: "15px" }} />
    //           966568893452
    //         </Text>
    //         <Text
    //           fontSize={{ base: "1.7vmin", md: "1.3vmin", lg: "1.7vmin" }}
    //           letterSpacing={"2px"}
    //           fontWeight={"600"}
    //           p={{ base: "0.5rem", md: "0.7rem", lg: "0rem 1rem 1rem 1rem" }}
    //         >
    //           <EmailIcon style={{ fontSize: "15px" }} />
    //           Premjadhav@gmail.com
    //         </Text>
    //       </Box>

    //       <Box display={"flex"} flexDirection={"column"} gap="5px">
    //         <Box display={"flex"} gap="5px">
    //           <Text
    //             fontSize={{ base: "1.7vmin", md: "1.3vmin", lg: "2.4vmin" }}
    //             letterSpacing={"2px"}
    //             fontWeight={"600"}
    //           >
    //             About the company
    //             <Text
    //               fontSize={{ base: "1.7vmin", md: "1.3vmin", lg: "1.7vmin" }}
    //             >
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit. A
    //               iure suscipit quod impedit, fugiat quasi laboriosam officiis
    //             </Text>
    //             <br />
    //             <Text
    //               fontSize={{ base: "1.5vmin", md: "1.5vmin", lg: "1.8vmin" }}
    //               textAlign={{ base: "center", md: "center", lg: "start" }}
    //             >
    //               Copyright Â© 2023 , All rights reserved.{" "}
    //             </Text>
    //           </Text>
    //         </Box>
    //       </Box>
    //     </Box>
    //   </Box>
    // </Box>
  );
};

export default Footer;
