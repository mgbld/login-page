import { Container, Flex, VStack } from "@chakra-ui/react";
import Cart from "../src/sections/cart";
import Details from "../src/sections/details";
import LogIn from "../src/sections/login";
import Showcase from "../src/sections/showcase";

const IndexPage = () => {
  return (
    <Flex h='100vh' py={0}>
      {/* <Details /> */}
      <Showcase />
      {/* <Cart /> */}
      <LogIn />
    </Flex>
  );
};

export default IndexPage;
