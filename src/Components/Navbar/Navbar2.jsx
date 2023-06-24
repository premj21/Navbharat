/* eslint-disable react-hooks/exhaustive-deps */
import React, {  useState } from 'react'
import {Box,Text} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import HomeIcon from "@mui/icons-material/Home";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import FormatListBulletedSharpIcon from "@mui/icons-material/FormatListBulletedSharp";
import YES from './YES';

const Navbar2 = () => {
    const navigate = useNavigate(); 

     const [st, setst] = useState({
       cross: "none",
       line: "set",
     });


   


  return (
    <>
      <Box
        cursor={"pointer"}
        onClick={() => setst({ line: "none", cross: "set" })}
        position={"fixed"}
        top={{ base: 7, md: 10 }}
        right={{ base: 12, md: 20 }}
        display={{ base: st.line, md: "none" }}
        zIndex={100000}
      >
        <FormatListBulletedSharpIcon />
      </Box>
      <Box
        cursor={"pointer"}
        zIndex={10}
        position={"fixed"}
        top={{ base: 7, md: 10 }}
        right={{ base: 12, md: 10 }}
        onClick={() => setst({ line: "set", cross: "none" })}
        display={{ base: st.cross, md: "none" }}
      >
        <CloseIcon />
      </Box>

      <YES />

      <Box
        display={{ base: st.line === "none" ? "flex" : "none", md: "none" }}
        position={"fixed"}
        top={14}
        right={3}
        flexDir={"column"}
        w="26vw"
        bg="black"
        color={"white"}
        zIndex={200}
      >
        <Text
          border={"1px solid white"}
          p="15px"
          onClick={() => {
            navigate("/");
            setst({ line: "set", cross: "none" });
          }}
          cursor={"pointer"}
        >
          Home
        </Text>
        <Text
          border={"1px solid white"}
          p="15px"
          onClick={() => {
            navigate("/About");
            setst({ line: "set", cross: "none" });
          }}
          cursor={"pointer"}
        >
          About
        </Text>
        <Text
          border={"1px solid white"}
          p="15px"
          onClick={() => {
            navigate("/Contact");
            setst({ line: "set", cross: "none" });
          }}
          cursor={"pointer"}
        >
          Contact
        </Text>
      </Box>

      <Box
        display={{ base: "none", md: "flex" }}
        flexDir={"column"}
        gap={"30px"}
        position={"fixed"}
        top={{ base: 7, md: 10 }}
        right={{ base: 12, md: 10, lg: "20" }}
      >
        <HomeIcon
          style={{
            fontSize: "3vmin",
            cursor: "pointer",
            color: "#4e4d4d",
            zIndex: "10000000000000000000 !important",
          }}
          onClick={() => navigate("/")}
        />
        <DensityMediumIcon
          style={{
            fontSize: "3vmin",
            cursor: "pointer",
            color: "#4e4d4d",
            zIndex: "10000000000000000000 !important",
          }}
          onClick={() => navigate("/About")}
        />
        <PermContactCalendarIcon
          style={{
            fontSize: "3vmin",
            cursor: "pointer",
            color: "#4e4d4d",
            zIndex: "100000000000000000000 !important",
          }}
          onClick={() => navigate("/Contact")}
        />
      </Box>
    </>
  );
}

export default Navbar2
