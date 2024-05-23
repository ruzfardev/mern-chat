import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Sidebar } from "../components/sidebar/index.jsx";
import { Chat } from "../components/chat/index.jsx";

export const Home = () => {
  return (
    <Box
      width={"80%"}
      height={"90vh"}
      bg="whiteAlpha.400"
      boxShadow={"xs"}
      borderRadius="md"
    >
      <Grid
        h="100%"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(8, 1fr)"
      >
        <GridItem rowSpan={2} colSpan={3}>
          <Sidebar />
        </GridItem>
        <GridItem colSpan={5} rowSpan={2}>
          <Chat />
        </GridItem>
      </Grid>
    </Box>
  );
};
