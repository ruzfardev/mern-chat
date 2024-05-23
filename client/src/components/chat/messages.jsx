import { Box, Center, Spinner } from "@chakra-ui/react";
import { Message } from "./message.jsx";
import { useGetMessages } from "../../hooks/useGetMessages.js";
import useChatListStore from "../../zustand/index.js";

export const Messages = () => {
  const { selectedChat } = useChatListStore();
  const { messages, loading } = useGetMessages(selectedChat._id);
  const { id: userId } = JSON.parse(localStorage.getItem("user"));
  if (loading) {
    return (
      <Center width={"100%"} height={"100%"}>
        <Spinner size={"xl"} />
      </Center>
    );
  }
  console.log("messages", userId);

  return (
    <Box
      p={4}
      overflow={"auto"}
      mt={"auto"}
      height={"100%"}
      scrollBehavior={"smooth"}
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
      <Box
        display={"flex"}
        flexDirection={"column"}
        height={"auto"}
        justifyContent={"flex-end"}
      >
        {!loading &&
          messages.map((message, index) => {
            let isSender;
            if (message.receiverId === userId) {
              isSender = true;
            } else if (message.senderId._id === userId) {
              isSender = false;
            } else {
              isSender = false;
            }
            return (
              <Message
                key={index}
                message={{
                  ...message,
                  isSender,
                }}
              />
            );
          })}
        <div ref={(el) => el && el.scrollIntoView({ behavior: "smooth" })} />
      </Box>
    </Box>
  );
};
