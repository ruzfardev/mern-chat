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
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useRegister } from "../hooks/useRegister.js";

export const Register = () => {
  const { register, loading } = useRegister();
  const form = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      fullName: "",
    },
  });
  const { handleSubmit } = form;
  const onSubmit = async (data) => {
    await register(data);
  };
  return (
    <Box
      width={"40%"}
      bg="whiteAlpha.500"
      boxShadow={"xs"}
      p={4}
      borderRadius="md"
    >
      <Center>
        <Heading size={"md"} as={"h2"}>
          Register
        </Heading>
      </Center>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          render={({ field }) => (
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input {...field} type="text" />
            </FormControl>
          )}
          control={form.control}
          name="fullName"
        />
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
              <FormLabel>Email</FormLabel>
              <Input {...field} type="email" />
            </FormControl>
          )}
          control={form.control}
          name="email"
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
        <Divider mt={4} />
        <Center mt={4}>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </Center>
        <Button
          disabled={loading}
          width={"100%"}
          type="submit"
          colorScheme={"teal"}
          mt={4}
          bg={"telegram.500"}
          _hover={{ bg: "telegram.600" }}
        >
          {" "}
          {loading ? "Loading..." : "Register"}
        </Button>
      </form>
    </Box>
  );
};
