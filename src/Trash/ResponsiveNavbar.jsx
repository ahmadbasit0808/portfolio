import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import MotionDrawerContent from "./MotionDrawerContent";


const ResponsiveNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1rem"
        bg="teal.500"
        color="white"
      >
        <Box fontWeight="bold">Logo</Box>

        {/* Desktop Nav */}
        <Flex display={{ base: "none", md: "flex" }} gap="4">
          <Box>Home</Box>
          <Box>About</Box>
          <Box>Contact</Box>
        </Flex>

        {/* Mobile Nav Toggle */}
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Open Menu"
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
        />
      </Flex>

      {/* Sidebar Drawer for Mobile */}
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <MotionDrawerContent
            initial={{ x: "-100%" }}
             animate={{ x: 0 }}
              exit={{ x: "-100%" }}
           transition={{ duration: 0.3 }}

        >
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack align="start">
              <Box onClick={onClose}>Home</Box>
              <Box onClick={onClose}>About</Box>
              <Box onClick={onClose}>Contact</Box>
            </VStack>
          </DrawerBody>
        </MotionDrawerContent>
      </Drawer>
    </>
  );
};

export default ResponsiveNavbar;