import { Box, Text, Badge } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
const CartButton = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      color="white"
      border="1px"
      borderRadius="5px"
      width="10%"
    >
      {/* <Badge border="1px" borderRadius="50%" height="20px" width="20px" /> */}
      <Text fontSize="24px">
        <AiOutlineShoppingCart />
      </Text>
      <Text>My Cart (0)</Text>
    </Box>
  );
};

export default CartButton;
