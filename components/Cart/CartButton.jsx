import { Box, Text, Badge } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
const CartButton = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      color="black"
      bg="gray.200"
      border="1px"
      borderRadius="5px"
      height="50px"
      width="10%"
      cursor="pointer"
      _hover={{ backgroundColor: "gray.400", opacity: "0.8", color: "black" }}
    >
      <Text fontSize="24px">
        <AiOutlineShoppingCart />
      </Text>
      <Text>My Cart (0)</Text>
    </Box>
  );
};

export default CartButton;
