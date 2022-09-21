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
} from "@chakra-ui/react";
// import hoodie from "../css/images/hoodie.jpeg";

const Cart = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const secondaryTextColor = useColorModeValue("gray.600", "gray.100");
  return (
    <VStack
      w='full'
      h='full'
      p={10}
      spacing={10}
      alignItems='flex-start'
      bg={bgColor}>
      <VStack spacing={3} alignItems='flex-start'>
        <Heading>Your Cart</Heading>
        <Text>
          If the price is too hard on your eyes,{" "}
          <Button variant='link' colorScheme='black' onClick={toggleColorMode}>
            try changing the theme.
          </Button>
        </Text>
      </VStack>
      <HStack spacing={6} alignItems='center' w='full'>
        <AspectRatio ratio={1} w={24}>
          {/* <Image src={hoodie.src} /> */}
          <Image src='/images/hoodie.jpeg' />
        </AspectRatio>
        <Stack
          spacing={0}
          w='full'
          direction='row'
          justifyContent='space-between'
          alignItems='center'>
          <VStack w='full' spacing={0} alignItems='flex-start'>
            <Heading size='md'>Penny Board</Heading>
            <Text color='gray.500'>PNYCOMP27542</Text>
          </VStack>
          <Heading size='sm' textAlign='end'>
            $119.00
          </Heading>
        </Stack>
      </HStack>
      <VStack spacing={4} alignItems='stretch' w='full'>
        <HStack justifyContent='space-between'>
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size='sm'>$119.00</Heading>
        </HStack>
        <HStack justifyContent='space-between'>
          <Text color={secondaryTextColor}>Shipping</Text>
          <Heading size='sm'>$19.99</Heading>
        </HStack>
        <HStack justifyContent='space-between'>
          <Text color={secondaryTextColor}>Taxes (estimated)</Text>
          <Heading size='sm'>$23.80</Heading>
        </HStack>
        <Divider />
        <HStack justifyContent='space-between'>
          <Text color={secondaryTextColor}>Total</Text>
          <Heading size='lg'>$162.79</Heading>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Cart;
