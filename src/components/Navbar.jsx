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
        bg={"#2B6CB0"}
        color={"#F7FAFC"}
        paddingX="10%"
      >
        <Heading {...navText}>Portfolio</Heading>
        <Flex gap={{ base: "2rem", md: "4rem", lg: "5rem" }}>
          <Heading {...navText}>
            <a href="#skill-section">Skills</a>
          </Heading>
          <Heading {...navText}>Projects</Heading>
          <Heading {...navText}>Contact</Heading>
        </Flex>
      </Flex>
    </Box>
  );
}
