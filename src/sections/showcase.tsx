import {
  VStack,
  Heading,
  Text,
  HStack,
  Button,
  AspectRatio,
  Image,
  Stack,
  Divider,
  // This is a hook
  useColorMode,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { url } from "inspector";
// import hoodie from "../css/images/hoodie.jpeg";

const Showcase = () => {
  return (
    <Box
      w='100%'
      bgImage="url('/images/login-showcase.png')"
      bgPosition='center'
      bgRepeat='no-repeat'
      bgSize='cover'></Box>
  );
};

export default Showcase;
