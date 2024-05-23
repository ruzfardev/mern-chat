import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { BiSend } from "react-icons/bi";

export const SendInput = () => {
  return (
    <Box
      borderTop={"1px solid #c4ddea"}
      p={2}
      px={4}
      display={"flex"}
      alignItems={"center"}
      mt={"auto"}
    >
      <Flex align={"center"} w={"100%"}>
        <InputGroup>
          <InputRightElement>
            <Button mr={2} rounded={"full"} bg={"#c4ddea"} p={1} size={"sm"}>
              <BiSend color={"#0088CC"} size={15} />
            </Button>
          </InputRightElement>
          <Input
            placeholder={"Type a message"}
            rounded={"full"}
            bg={"#f4f4f4"}
            _focus={{ bg: "white" }}
          />
        </InputGroup>
      </Flex>
    </Box>
  );
};
