import { VStack, Wrap, WrapItem, Heading, Text, Box } from "@chakra-ui/react";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiChakraui,
  SiCplusplus,
  SiGithub,
  SiTypescript,
} from "react-icons/si";

const SkillCard = ({ icon, label, description }) => (
  <VStack
    spacing={3}
    transition={"transform 1s ease"}
    alignItems="center"
    textAlign="center"
    w="165px"
    borderRadius="8"
    boxShadow="0px 0px 1px black"
    padding={4}
    _hover={{ boxShadow: "0px 0px 3px black", transform: "scale(1.1)" }}
  >
    <Box>{icon}</Box>
    <Text fontWeight="bold" fontSize="lg" color={"#2B6CB0"}>
      {label}
    </Text>
    {description && <Text fontSize="sm">{description}</Text>}
  </VStack>
);

export default function SkillSection() {
  return (
    <VStack paddingBottom={"5rem"} spacing={"40px"} id="skill-section">
      <Heading>Skills</Heading>
      <Wrap spacing="45px" justify="center" maxW="1050px" mx={"auto"}>
        <WrapItem>
          <SkillCard
            icon={<SiCplusplus size="6rem" color="#084A86" />}
            label="C++"
            description="System-level coding with precise memory access"
          />
        </WrapItem>
        <WrapItem>
          <SkillCard
            icon={<SiHtml5 size="6rem" color="#DD4B25" />}
            label="HTML5"
            description="Markup language for structuring web page elements"
          />
        </WrapItem>
        <WrapItem>
          <SkillCard
            icon={<SiCss3 size="6rem" color="#146EB0" />}
            label="CSS3"
            description="Style web content with flexible responsive layouts"
          />
        </WrapItem>
        <WrapItem>
          <SkillCard
            icon={<SiBootstrap size="6rem" color="#8219FB" />}
            label="Bootstrap"
            description="Utility-first toolkit for responsive frontend design"
          />
        </WrapItem>
        <WrapItem>
          <SkillCard
            icon={<SiJavascript size="6rem" color="#F0DC55" />}
            label="JavaScript"
            description="Control logic and behavior across web interfaces"
          />
        </WrapItem>
        <WrapItem>
          <SkillCard
            icon={<SiGithub size="6rem" color="#15191F" />}
            label="Github"
            description="Develop native mobile apps with React components"
          />
        </WrapItem>
        <WrapItem>
          <SkillCard
            icon={<SiReact size="6rem" color="#57C4DC" />}
            label="React"
            description="Build dynamic interfaces for single page applications"
          />
        </WrapItem>
        <WrapItem>
          <SkillCard
            icon={<SiChakraui size="6rem" color="#2F91A5" />}
            label="Chakra UI"
            description="Accessible React components for flexible visual layouts"
          />
        </WrapItem>
        <WrapItem>
          <SkillCard
            icon={<SiTypescript size="6rem" color="#2F74C0" />}
            label="TypeScript"
            description="Typed JavaScript for safer scalable development"
          />
        </WrapItem>
        <WrapItem>
          <SkillCard
            icon={<SiReact size="6rem" color="#105084" />}
            label="React Native"
            description="Develop native mobile apps with React components"
          />
        </WrapItem>
      </Wrap>
    </VStack>
  );
}
