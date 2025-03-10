import { Container, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Container maxW={"1140px"} px={"4"} my={"5"}>
      <Flex
        h={"16px"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          lg: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>
      </Flex>
    </Container>
  );
};

export default Navbar;
