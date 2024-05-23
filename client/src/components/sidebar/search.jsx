import { Box, Input } from "@chakra-ui/react";
export const SearchBar = () => {
  return (
    <Box borderBottom={"1px solid #c4ddea"} p={4} py={2}>
      <Input
        rounded={"full"}
        bg={"#f4f4f4"}
        _focus={{ bg: "white" }}
        size={"xs"}
        type="text"
        placeholder="Search users..."
      />
    </Box>
  );
};
