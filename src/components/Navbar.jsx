import { Flex, Box, Heading } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const navText = {
  size: {
    base: "sm",
    md: "md",
  },
  fontWeight: "normal",
  cursor: "pointer",
  transition: "transform 0.3s ease",
  _hover: {
    transform: "scale(1.1)",
    color: "black",
  },
};

export default function Navbar() {
  const headerRef = useRef(null);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (headerRef.current) {
        if (currentScrollY > prevScrollY.current) {
          headerRef.current.style.transform = "translateY(-200px)";
        } else {
          headerRef.current.style.transform = "translateY(0)";
        }
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      ref={headerRef}
      position="fixed"
      w="100%"
      zIndex={1000}
      style={{ transition: "transform 0.3s ease" }}
    >
      <Flex
        alignItems="center"
        justify={"space-between"}
        paddingY={4}
        bgGradient={
          "linear(to-r, rgba(71, 125, 216, 1), #0fd5c1ff, #0d3c6eff )"
        }
        color={"#F7FAFC"}
        paddingX={{ base: "5%", sm: "10%" }}
      >
        <Heading {...navText}>
          <a href="#landing-section">Portfolio</a>
        </Heading>
        <Flex gap={{ base: "1rem", md: "4rem", lg: "5rem" }}>
          <Heading {...navText}>
            <a href="#project-section">Projects</a>
          </Heading>
          <Heading {...navText}>
            <a href="#skill-section">Skills</a>
          </Heading>
          <Heading {...navText}>
            <a href="#contact-section">Contact</a>
          </Heading>
        </Flex>
      </Flex>
    </Box>
  );
}
