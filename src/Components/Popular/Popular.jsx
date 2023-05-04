import { Box, Image,Text } from '@chakra-ui/react'
import React from 'react'

const Popular = () => {
    const data = [
      {
        src: "https://staticimg.titan.co.in/Titan/Catalog/1797KL02F_1.jpg?impolicy=pqmed&imwidth=640",
        price: "₹ 19,995.00",
        name: "Titan Automatic Blue Dial",
        link: "https://www.titan.co.in/product/titan-blue-dial-hand-wound-watch-for-men-1797kl02f",
      },

      {
        src: "https://staticimg.titan.co.in/Titan/Catalog/95146KD02_1.jpg?impolicy=pqmed&imwidth=640",
        price: "₹ 18,445.00",
        name: "Titan Raga Ceramics Green Dial",
        link: "",
      },
      {
        src: "https://cdn2.chrono24.com/images/uhren/25124074-ibskw0hbq6gvelidxg77fvcl-ExtraLarge.jpg",
        price: "₹ 1,694,168",
        name: "Rolex GMT-Master II",
        link: "https://www.chrono24.in/rolex/gmt-master-ii-116713ln-steel--18k-yellow-gold-black-dial--id25124074.htm",
      },
      {
        src: "https://staticimg.titan.co.in/Fastrack/Catalog/3147KM01_1.jpg?impolicy=pqmed&imwidth=640",
        price: "₹ 4395.00",
        name: "Black Dial Black Stainless Steel",
        link: "https://www.fastrack.in/product/fastrack-watch-with-black-stainless-steel-strap-for-guys-3147km01",
      },

      {
        src: "https://bigdeals24x7.com/uploads/product_image/product_Sonata-Arcade-From-Sf-Red-Digital-Watch-77100PP04_1.webp",
        price: "₹ 1,049.00",
        name: "Sonata Arcade From Sf Red",
        link: "https://www.sonatawatches.in/product/arcade-from-sf-red-digital-watch-for-men-77100pp04",
      },
      {
        src: "https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/G/GM/gmb/gm-b2100gd-9a/assets/GM-B2100GD-9A.png",
        price: "₹ 42,995.00",
        name: "GM-B2100GD-9A",
        link: "https://www.casio.com/in/watches/gshock/product.GM-B2100GD-9A/",
      },
    ];
  return (
    <>
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
          letterSpacing={{ base: "10px", md: "8px", lg: "7px" }}
          textAlign={"center"}
          fontSize={{md:"4vmin",lg:"4vmin"}}
          fontWeight="300"
        >
          POPULAR ITEMS
        </Text>
      </Box>
      <Box
        w="100vw"
        p="5%"
        ml={{lg:'-5rem'}}
        overflowX={"hidden"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        gap="16%"
      >
        {data.map((itme, index) => (
          <Box
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
            mt={{ md: "-2rem" }}
            mb="4rem"
            w={{ base: "40%", md: "22%", lg: "17%" }}
            h="20%"
          >
            <Image src={itme.src} alt="pic loading" key={index} />
            <Text
              textAlign={"center"}
              fontSize={{ base: "3vmin", md: "2vmin", lg: "2vmin" }}
            >
              {itme.name}
            </Text>
            <Text fontWeight={"600"} color={"blackAlpha.700"}>
              {itme.price}
            </Text>
          </Box>
        ))}
      </Box>

      <Box></Box>
    </>
  );
}

export default Popular
