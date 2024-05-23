import { Flex } from "@chakra-ui/react";
import { Messages } from "./messages.jsx";
import { SendInput } from "./sendInput.jsx";
import useChatListStore from "../../zustand/index.js";
import { StartChat } from "./idleState.jsx";
export const Chat = () => {
  const { selectedChat } = useChatListStore();
  if (!selectedChat) {
    return <StartChat />;
  }
  return (
    <Flex h="100%" direction={"column"}>
      <Messages />
      <SendInput />
    </Flex>
  );
};
