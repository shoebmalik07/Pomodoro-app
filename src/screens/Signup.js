import React from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Spacer,
  Text,
  Alert,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import FormContainer from "../components/FormContainer";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useUserAuth } from "../contexts/UserAuthContext";

const Signup = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signup } = useUserAuth();

  let submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(email, password);
      navigate('/')
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Flex alignItems="center" justifyContent="center" w="full" py="5">
      <FormContainer>
        <Heading as="h1" mb="8" fontSize="3xl">
          Sign up
        </Heading>
        {error && <Alert status="error">{error}</Alert>}
        <form onSubmit={submitHandler}>
          <FormControl id="email">
            <FormLabel htmlFor="email"> Email</FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="your email"
              // value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </FormControl>

          <Spacer h="3" />

          <FormControl id="password">
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type="password"
              placeholder="**********"
              // value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </FormControl>

          <Button type="submit" colorScheme="purple" mt="4">
            Sign up
          </Button>
        </form>

        <Flex>
          <Text fontWeight="semibold">
            Already a User?{" "}
            <Link as={RouterLink} to="/">
              click here to login
            </Link>
          </Text>
        </Flex>
      </FormContainer>
    </Flex>
  );
};

export default Signup;
