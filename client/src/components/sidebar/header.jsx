import {
  Avatar,
  Box,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useAuth } from "../../context/AuthContext.jsx";
import { IoSettingsOutline } from "react-icons/io5";
import { useLogout } from "../../hooks/useLogout.js";

export const Header = () => {
  const { user } = useAuth();
  const { logout } = useLogout();
  return (
    <Box borderBottom={"1px solid #c4ddea"} p={1} px={4}>
      <Flex align={"center"}>
        <Avatar name={user?.fullName} />
        <Heading as={"h3"} size={"md"} ml={4}>
          {user?.fullName}
        </Heading>
        <Menu>
          <MenuButton
            aria-label="Options"
            type={"button"}
            ml={"auto"}
            rounded={"full"}
            bg={"#c4ddea"}
            p={2}
          >
            <IoSettingsOutline color={"#0088CC"} size={15} />
          </MenuButton>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
          </MenuList>
        </Menu>
        {/*<Button*/}
        {/*  type={"button"}*/}
        {/*  ml={"auto"}*/}
        {/*  rounded={"full"}*/}
        {/*  bg={"#c4ddea"}*/}
        {/*  p={0}*/}
        {/*  size={"sm"}*/}
        {/*>*/}
        {/*  <BiSolidUserPlus color={"#0088CC"} size={15} />*/}
        {/*</Button>*/}
      </Flex>
    </Box>
  );
};
