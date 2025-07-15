import {
  Flex,
  Box,
  VStack,
  Text,
  Heading,
  Image,
  Link,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Evowear from "../media/Evowear.png";

const projects = [
  {
    title: "Evowear",
    image: Evowear,
    description:
      "Evowear is a sleek UI concept for a clothing store built with HTML, CSS, and Bootstrap. It showcases responsive design and custom styling.",
    link: "https://ahmadbasit0808.github.io/evowear/index.html",
  },
  {
    title: "TechNova",
    image: Evowear,
    description:
      "TechNova is a React-based dashboard with dynamic charts and animations using Chakra UI and Framer Motion.",
    link: "https://your-technova-link.com",
  },
  {
    title: "CodeVerse",
    image: Evowear,
    description:
      "An interactive coding blog platform featuring dark mode, scroll-sensitive animations, and custom hooks.",
    link: "https://your-codeverse-link.com",
  },
];

const MotionBox = motion(Box);

const ProjectSlide = ({ title, image, description, link }) => (
  <MotionBox
    overflow="hidden"
    whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)" }}
    transition={{ type: "spring", stiffness: 100 }}
    marginX={{ base: "1rem", md: "2rem", lg: "3rem" }}
    paddingY={8}
    border="1px solid #E2E8F0"
    borderRadius="md"
    paddingX="5%"
    marginBottom={16}
    bgGradient={"linear(to-r, #ffffffff, #e5e2e2ff, #a5a2a2ff )"}
  >
    <Flex
      direction={{ base: "column", lg: "row" }}
      align="center"
      justify="space-between"
      gap={{ base: 6, md: 8, lg: 10 }}
    >
      {/* Left: Text Content */}
      <MotionBox
        flex="1"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Text fontSize="2xl" fontWeight="bold" mb={2} color="#2B6CB0">
          {title}
        </Text>
        <Text fontSize="md" mb={4}>
          {description}
        </Text>
        <Link href={link} isExternal>
          <Button colorScheme="teal">View Project</Button>
        </Link>
      </MotionBox>

      {/* Right: Image */}
      <MotionBox
        flex="1"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        minW={{ base: "250px", md: "280px", lg: "300px" }}
      >
        <Link href={link} isExternal>
          <Image src={image} alt={"Evowear"} borderRadius="md" />
        </Link>
      </MotionBox>
    </Flex>
  </MotionBox>
);

const ProjectsSection = () => (
  <VStack spacing={"2rem"} paddingBottom={"2rem"} id="project-section">
    <Heading>Projects</Heading>
    <Box>
      {projects.map((project, index) => (
        <ProjectSlide
          key={index}
          title={project.title}
          image={project.image}
          description={project.description}
          link={project.link}
        />
      ))}
    </Box>
  </VStack>
);

export default ProjectsSection;
