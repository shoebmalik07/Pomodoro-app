import React, { useState, useEffect } from "react";
import { Button, Heading, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);

  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds - 1);
      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
      if (minutes === 0) {
        setSeconds(0);
        setMinutes(25);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  const restart = () => {
    setSeconds(0);
    setMinutes(25);
  };
  const pause = () => {
    clearInterval(timer);
  };
  const play = () => {
    setSeconds(seconds - 1);
      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
  };

  return (
    <>
      <Navbar />
      <Flex alignItems="center" justifyContent="center" mt="40">
        <Flex
          alignItems="center"
          justifyContent="center"
          direction="column"
          bgColor="purple.100"
          p="12"
          borderRadius="15"
          boxShadow="dark-lg"
        >
          <Heading as="h1" fontSize="3xl" mb="5">
            Timer
          </Heading>
          <Heading as="h1" fontSize="6xl" mb="5">
            {minutes < 10 ? "0" + minutes : minutes} :{" "}
            {seconds < 10 ? "0" + seconds : seconds}
          </Heading>
          <Flex mb="5">
            <Button onClick={restart} colorScheme="purple" mx="5">
              RESTART
            </Button>
            <Button onClick={play} colorScheme="purple" mx="5">
              PLAY
            </Button>
            <Button onClick={pause} colorScheme="purple" mx={"5"}>
              PAUSE
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Timer;
