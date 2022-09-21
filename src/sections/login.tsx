import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  Input,
  Checkbox,
  Button,
  Container,
  Box,
  Link,
  Image,
} from "@chakra-ui/react";

const LogIn = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email required"),
      password: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Password required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container maxW='container.xl' p={0}>
      <Image
        src='/images/altimetrik-banner.png'
        alt='altimetrik-banner'
        py={10}
        h='140px'
      />
      <VStack w='full' h='70%' justifyContent='center'>
        <Box maxW='md' borderRadius='xl' bg='gray.50' p={9}>
          <VStack spacing={5} alignItems='flex-start' px={6} py={4}>
            <Heading as='h4' size='md'>
              Login
            </Heading>
            <Text fontSize='lg' color='gray.400'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              mattis nibh ut enim ullamcorper accumsan. Sed quis erat
              ullamcorper, congue metus ac, ullamcorper magna.
            </Text>
          </VStack>
          <form onSubmit={formik.handleSubmit}>
            <SimpleGrid columns={2} columnGap={3} rowGap={6} px={6} py={4}>
              <GridItem colSpan={2}>
                <FormControl>
                  <Input
                    id='email'
                    type='email'
                    placeholder='E-mail'
                    borderColor='gray.200'
                    _placeholder={{ opacity: 0.2, color: "inherit" }}
                    background='white'
                    _focus={{ boxShadow: "none" }}
                    focusBorderColor='orange.300'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <Text color='red.500' pt={2}>
                      {formik.errors.email}
                    </Text>
                  ) : null}
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl>
                  <Input
                    id='password'
                    type='password'
                    placeholder='Password'
                    borderColor='gray.200'
                    _placeholder={{ opacity: 0.2, color: "inherit" }}
                    background='white'
                    _focus={{ boxShadow: "none" }}
                    focusBorderColor='orange.300'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {formik.errors.password && formik.touched.password ? (
                    <Text color='red.500' pt={2}>
                      {formik.errors.password}
                    </Text>
                  ) : null}
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <Checkbox
                  size='md'
                  colorScheme='orange'
                  id='rememberMe'
                  name='rememberMe'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.rememberMe}>
                  <Text fontSize='sm' color='gray.400'>
                    Remember me
                  </Text>
                </Checkbox>
              </GridItem>
              <GridItem colSpan={2}>
                <Button
                  type='submit'
                  size='lg'
                  w='full'
                  bg='#fb642d'
                  color='white'
                  _hover={{ opacity: 0.8 }}>
                  Login
                </Button>
              </GridItem>
              <GridItem>
                <Link color='blue.500' href='#'>
                  Forgot Password?
                </Link>
              </GridItem>
            </SimpleGrid>
          </form>
        </Box>
      </VStack>
    </Container>
  );
};

export default LogIn;
