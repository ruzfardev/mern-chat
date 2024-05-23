import { Box, Button, Center, Divider, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";

export const StartChat = () => {
  return (
    <Box width={"100%"} height={"100%"} bg="transparent" p={4}>
      <Center
        width={"100%"}
        height={"100%"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <FaTelegramPlane size={100} color={"#0088CC"} />
        <Heading size={"md"} as={"h2"} color={"gray.600"} mt={2}>
          Welcome to MERN Chat
        </Heading>
        <Text color={"gray.500"} mt={2}>
          Select chat to start messaging
        </Text>
      </Center>
    </Box>
  );
};
