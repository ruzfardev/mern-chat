import { Header } from "./header.jsx";
import { ChatList } from "../chatList/index.jsx";
import { Flex } from "@chakra-ui/react";
import { SearchBar } from "./search.jsx";

export const Sidebar = () => {
  return (
    <Flex h="100%" borderRight={"1px solid #c4ddea"} direction={"column"}>
      <Header />
      <SearchBar />
      <ChatList />
    </Flex>
  );
};
