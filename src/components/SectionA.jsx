import { Heading, Avatar, VStack, Box } from "@chakra-ui/react";
import avatar from "../media/avatar.jpg";

export default function SectionA() {
  return (
    <Box
      paddingY={200}
      display="flex"
      alignItems="center"
      justifyContent="center"
      color={"#2d3748"}
    >
      <VStack>
        <Avatar
          name="Ahmad Basit"
          height={"9rem"}
          width={"auto"}
          marginBottom={3}
          boxShadow="0px 0px 5px black"
          src={avatar}
        />
        <Heading fontSize={"sm"}>Hello, I am Muhammad Ahmad Basit!</Heading>
        <Heading>"A frontend developer</Heading>
        <Heading>specialized in React</Heading>
        <Heading>and React Native"</Heading>
      </VStack>
    </Box>
  );
}
