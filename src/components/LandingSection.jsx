import { Heading, Avatar, VStack, Box } from "@chakra-ui/react";
import avatar from "../media/avatar.jpg";

export default function LandingSection() {
  return (
    <Box
      paddingY={200}
      display="flex"
      alignItems="center"
      justifyContent="center"
      color={"#2d3748"}
      id="landing-section"
    >
      <VStack>
        <Avatar
          name="Ahmad Basit"
          height={"9rem"}
          width={"9rem"}
          marginBottom={3}
          boxShadow="0px 0px 5px black"
          src={avatar}
        />
        <Heading fontSize={{ base: "xs", sm: "sm" }}>
          Hello, I am Muhammad Ahmad Basit!
        </Heading>
        <Heading fontSize={{ base: "2xl", sm: "3xl" }}>
          "A frontend developer
        </Heading>
        <Heading fontSize={{ base: "2xl", sm: "3xl" }}>
          specialized in React
        </Heading>
        <Heading fontSize={{ base: "2xl", sm: "3xl" }}>
          and React Native"
        </Heading>
      </VStack>
    </Box>
  );
}
