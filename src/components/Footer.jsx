import { Flex, Box, Text, HStack, color } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const iconWrapperStyles = {
  size: "xl",
  transition: "transform 0.3s ease",
  _hover: {
    transform: "scale(1.3)",
    color: "black",
  },
};

const Socials = [
  { icon: faInstagram, url: "https://www.instagram.com/ahmadbasit0808/" },
  { icon: faFacebook, url: "https://www.facebook.com/ahmadbasit0808" },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/muhammad-ahmad-basit-2164b4317/",
  },
  { icon: faGithub, url: "https://github.com/ahmadbasit0808" },
  { icon: faEnvelope, url: "mailto:ahmadbasit0808@gmail.com" },
];

export default function Footer() {
  const Links = Socials.map((item) => {
    return (
      <Box {...iconWrapperStyles}>
        <a href={item.url} target="_blank">
          <FontAwesomeIcon size={"xl"} icon={item.icon} />
        </a>
      </Box>
    );
  });

  return (
    <Flex
      paddingX={"10%"}
      paddingY={"4rem"}
      fontSize={17}
      bgGradient={"linear(to-r, rgba(71, 125, 216, 1), #0fd5c1ff, #0d3c6eff )"}
      color={"#F7FAFC"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={1}
    >
      <Text whiteSpace={"nowrap"} fontSize={{ base: "sm", md: "lg" }}>
        Copyright © ahmadbasit0808.github.io
      </Text>
      <Text whiteSpace={"nowrap"} fontSize={{ base: "sm", md: "lg" }}>
        {` Since 
        ${new Date().getFullYear()} `}{" "}
        | All rights reserved.
      </Text>
      <HStack spacing={5} mt={3}>
        {Links}
      </HStack>
    </Flex>
  );
}
