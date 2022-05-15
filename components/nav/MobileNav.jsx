import { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Menu,
  MenuButton,
  MenuList, 
  MenuItem
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const MobileNav = () => {
  const [showDropdown, setShowdropdown] = useState(false);

  const showDropdownHandler = () => {
    setShowdropdown((prevShowDropdown) => !prevShowDropdown);
  };


  return (
    <Flex px="8" py="8" bg="black" justifyContent="space-between">
      <Box bg="black">
        <Heading size="md" pt="1" color="white">
          Emily Moran
        </Heading>
      </Box>
      {!showDropdown && (
        <HamburgerIcon color="white" onClick={showDropdownHandler} />
      )}
      {showDropdown && (
          <Menu>
              <MenuButton as={HamburgerIcon} color="white" />
              <MenuList width="50px">
                  <MenuItem>About</MenuItem>
                  <MenuItem>Contact</MenuItem>
                  <MenuItem>Jewelry</MenuItem>
                  <MenuItem>Embroidery</MenuItem>
              </MenuList>
          </Menu>
      )}
    </Flex>
  );
};

export default MobileNav;
