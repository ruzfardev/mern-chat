import { Center } from "@chakra-ui/react";

export const CenterContainer = (props) => {
  return (
    <Center
      w="100%"
      h="100%"
      bgGradient={"linear(to-br, telegram.50, telegram.100)"}
    >
      {props.children}
    </Center>
  );
};
