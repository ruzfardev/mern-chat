import {
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin.js";

export const Login = () => {
  const { loading, login } = useLogin();
  const form = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      userName: "",
      password: "",
    },
  });
  const { handleSubmit } = form;

  const onSubmit = async (data) => {
    await login(data);
  };
  return (
    <Box
      width={"40%"}
      bg="whiteAlpha.400"
      boxShadow={"xs"}
      p={4}
      borderRadius="md"
    >
      <Center>
        <Heading size={"md"} as={"h2"}>
          Login
        </Heading>
      </Center>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          render={({ field }) => (
            <FormControl>
              <FormLabel>User Name</FormLabel>
              <Input {...field} type="text" />
            </FormControl>
          )}
          control={form.control}
          name="userName"
        />
        <Controller
          render={({ field }) => (
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input {...field} type="password" />
            </FormControl>
          )}
          control={form.control}
          name="password"
        />
        <Divider marginTop={"10px"} />
        <Center mt={4}>
          <p>
            Dont have an account? <Link to="/register">Register</Link>
          </p>
        </Center>
        <Button
          disabled={loading}
          type={"submit"}
          width={"100%"}
          mt={4}
          colorScheme="teal"
          bg={"telegram.500"}
          _hover={{ bg: "telegram.600" }}
        >
          {loading ? "Loading..." : "Login"}
        </Button>
      </form>
    </Box>
  );
};
