import { Link as RouterLink } from "react-router-dom";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useUserAuth } from "../contexts/UserAuthContext";

const Header = () => {
  const { user, logOut } = useUserAuth();

  const logOutHandler = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <Flex
      as="header"
      alignItems="flex-end"
      justifyContent="space-between"
      wrap="wrap"
      py="6"
      px="6"
      bgColor="purple.500"
      w="100%"
      position="fixed"
      top="0"
    >
      <Text color="white" fontSize="lg" mr="5" fontWeight="bold">
        {user && user.email}
      </Text>
      <Heading
        as="h1"
        to="/cart"
        color="white"
        fontSize="3xl"
        mr="150"
        fontWeight="bold"
      >
        Pomodoro App
      </Heading>

      <Button onClick={logOutHandler}>Logout</Button>
    </Flex>
  );
};
export default Header;
