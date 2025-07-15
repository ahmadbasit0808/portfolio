import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  HStack,
  FormErrorMessage,
  VStack,
} from "@chakra-ui/react";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    reset(); // Reset form after submission
  };

  return (
    <VStack marginBottom={"5rem"} id="contact-section">
      <Heading mb={"2rem"}>Contact</Heading>
      <Box
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        width={{ base: "70%", md: "60%", lg: "50%" }}
      >
        <FormControl isInvalid={errors.name} mb={4}>
          <FormLabel>Name</FormLabel>
          <Input {...register("name", { required: "Name is required" })} />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.email} mb={4}>
          <FormLabel>Email</FormLabel>
          <Input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email format",
              },
            })}
          />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.message} mb={6}>
          <FormLabel>Message</FormLabel>
          <Textarea
            height={"10rem"}
            {...register("message", { required: "Message cannot be empty" })}
          />
          <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
        </FormControl>

        <HStack justifyContent={"center"}>
          <Button type="submit" colorScheme="teal" w={"15rem"}>
            Send Message
          </Button>
        </HStack>

        {isSubmitSuccessful && (
          <Box mt={4} color="green.500">
            Thanks! Your message was sent.
          </Box>
        )}
      </Box>
    </VStack>
  );
}
