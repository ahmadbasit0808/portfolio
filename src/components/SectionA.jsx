import { Heading, Avatar, VStack, Box } from "@chakra-ui/react";
import avatar from "../media/avatar.jpg";

export default function SectionA() {
  return (
    <Box h="90vh" display="flex" alignItems="center" justifyContent="center">
      <VStack>
        <Avatar name="Ahmad Basit" size="xl" src={avatar} />
        <Heading fontSize={"sm"}>Hello, I am Muhammad Ahmad Basit!</Heading>
        <Heading>"A frontend developer</Heading>
        <Heading>specialized in React</Heading>
        <Heading>and React Native"</Heading>
      </VStack>
    </Box>
  );
}
