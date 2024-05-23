import { Avatar, Box, Text } from "@chakra-ui/react";

export const Message = (props) => {
  const { isSender, message, createdAt } = props.message;
  console.log("message", props.message);
  return (
    <Box
      justifyContent={!isSender ? "flex-end" : "flex-start"}
      p={2}
      px={4}
      display={"flex"}
      alignItems={"center"}
    >
      {isSender && <Avatar size={"sm"} src={"https://bit.ly/dan-abramov"} />}
      <Box
        boxShadow={"xs"}
        bg={isSender ? "#f4f4f4" : "#C5E4F3"}
        p={2}
        ml={2}
        mr={!isSender && 2}
        borderRadius={"10px"}
        maxWidth={"70%"}
      >
        <Text>{message}</Text>
        <Text as={"small"} color={"gray.500"} fontSize={"xs"}>
          {new Date(createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Text>
      </Box>
    </Box>
  );
};
