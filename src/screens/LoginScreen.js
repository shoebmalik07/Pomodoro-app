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
  Icon,
  Alert
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import FormContainer from "../components/FormContainer";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {FcGoogle} from 'react-icons/fc'
import { useUserAuth } from "../contexts/UserAuthContext";

const LoginScreen = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState('')

  
  const {logIn, signInWithGoogle} = useUserAuth()

  const submitHandler = async(e) => {
    e.preventDefault();
    setError('')
    try {
      await logIn(email,password)
      navigate('/timer')
    } catch (err) {
      setError(err.message)
    }

  };

  const handleSubmit =async (e)=>{
    e.preventDefault()
    try {
      await signInWithGoogle()
      navigate('/timer')
      
    } catch (err) {
      setError(err.message)
      
    }
  }

  return (
    <Flex w="full" alignItems="center" justifyContent="center" py="p">
      <FormContainer>
        <Heading as="h1" mb="8" fontSize="3xl">
          Login
        </Heading>
        {error && <Alert status="error">{error}</Alert>}
        <form onSubmit={submitHandler}>
          <FormControl id="email">
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="username@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <Spacer h="3" />

          <FormControl id="password">
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type="password"
              placeholder="***********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Button type="submit" colorScheme="purple" mt="4">
            Login
          </Button>
        </form>
        
        <Button
          mt={"10"}
          bgColor={"purple.500"}
          color="white"
          _hover={{ color: "black", bgColor: "white" }}
          onClick={handleSubmit}
        >
          <Icon as={FcGoogle} mx="2" fontSize={"xl"} />
          <Text fontSize="l">sign in with google</Text>
        </Button>

        <Flex pt="10">
          <Text fontWeight="semibold">
            New User?
            <Link as = {RouterLink} to= '/signup'>
              click here to sign up
            </Link>
          </Text>
        </Flex>
      </FormContainer>
    </Flex>
  );
};

export default LoginScreen;
