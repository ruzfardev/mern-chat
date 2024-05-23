import {
  Avatar,
  AvatarBadge,
  Box,
  Divider,
  Flex,
  Skeleton,
} from "@chakra-ui/react";
import useChatListStore from "../../zustand/index.js";
import { useConversation } from "../../hooks/useConversation.js";
import { useGetMessages } from "../../hooks/useGetMessages.js";

export const ChatList = () => {
  const { chatList, selectedChat, setSelectedChat } = useChatListStore();
  const { loading } = useConversation();

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
  };
  return (
    <Flex
      p={2}
      direction={"column"}
      overflow={"auto"}
      css={{
        "&::-webkit-scrollbar": {
          width: "4px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#c4ddea",
          borderRadius: "24px",
          cursor: "pointer",
        },
      }}
    >
      {loading &&
        Array.from({ length: 8 }).map((_, i) => {
          return (
            <>
              <Box key={i} p={2} rounded={"md"}>
                <Skeleton>
                  <Flex alignItems={"center"}>
                    <Avatar name={"Chat"}>
                      <AvatarBadge boxSize="1rem" bg="green.500" />
                    </Avatar>
                    <Box ml={2}>Chat {i}</Box>
                  </Flex>
                </Skeleton>
              </Box>
            </>
          );
        })}
      {!loading &&
        chatList.map((chat, i) => {
          const isSelected = chat._id === selectedChat?._id;
          return (
            <>
              <Box
                key={i}
                p={2}
                rounded={"md"}
                _hover={{ bg: "#c8e9fb" }}
                transition={"ease 0.3s"}
                cursor={"pointer"}
                bg={isSelected ? "#c8e9fb" : ""}
                onClick={() => handleChatSelect(chat)}
              >
                <Flex alignItems={"center"}>
                  <Avatar name={chat.participant.fullName}>
                    <AvatarBadge boxSize="1rem" bg="green.500" />
                  </Avatar>
                  <Box ml={2}>{chat.participant.fullName}</Box>
                </Flex>
              </Box>
              <Divider />
            </>
          );
        })}
    </Flex>
  );
};
