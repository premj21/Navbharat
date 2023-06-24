/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import { Tabs,Box, TabList, TabPanels,Text, Tab, TabPanel, TabIndicator } from "@chakra-ui/react";
import OneB from './OneB';
import TwoB from './TwoB';
import Footer from '../footer/Footer';
const Contact = () => { 
  return (
    <>
      <Box w="100vw" ml={{ lg: "-5rem" }} h="fit-content" bg="white">
        <Box
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          zIndex={10111}
          maxW="100%"
          maxH="70vh"
          overflow={"hidden"}
          boxShadow="0px 5px 20px rgba(0,0,0,0.190)"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1683024063055!6m8!1m7!1sCAoSLEFGMVFpcE9xM3hVTmlLMmlBTlpkWWdCY0prSWNncFpuNENkSGl1RTY0aVNT!2m2!1d17.677935863374!2d75.901878200264!3f300!4f0!5f0.7820865974627469"
            width="600"
            height="450"
            style={{ border: 0, width: "100%", height: "70vh" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
        <Box
          maxW={"100vw"}
          w="100vw"
          mt="3rem"
          ml={{ lg: "-5rem" }}
          bg="white"
          boxShadow="0px 5px 20px rgba(255, 251, 251, 0.1)"
          p="10px"
          zIndex={-100}
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
            OURSTORES
          </Text>
          <Text
            position={"relative"}
            top="-50"
            letterSpacing={{ base: "10px", md: "8px", lg: "7px" }}
            textAlign={"center"}
            fontSize={{ md: "4vmin", lg: "4vmin" }}
            fontWeight="300"
          >
            OUR STORES
          </Text>
        </Box>

        <Tabs mb="3rem" w="100vw" position="relative" variant="unstyled" >
          <TabList ml={{ base: "2rem", md: "10rem" }}>
            <Tab>Branch-1</Tab>
            <Tab>Branch-2</Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="blue.500"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel>
              <OneB />
            </TabPanel>
            <TabPanel>
              <TwoB />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Footer />
    </>
  );
}

export default Contact
