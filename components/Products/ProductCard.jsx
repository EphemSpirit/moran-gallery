import { Box, Text, Flex, Heading, Button, Slide } from "@chakra-ui/react";
import Image from "next/image";
// import Professor from '/assets/prof_portal.jpeg'

const ProductCard = ({ title, description, price }) => {
  return (
    <Box
      height="auto"
      width="350px"
      backgroundColor="white"
      shadow="md"
    >
      <Box borderBottom="1px" height="315px" textAlign="center">
        <Image height="315px" width="350px" src={"/assets/prof_portal.jpeg"} />
      </Box>
      <Flex
        direction="column"
        align="center"
        justify="center"
        pt="3"
        px="4px"
        py="8px"
        backgroundColor="black"
        color="white"
        borderTop="5px"
        borderTopColor="gray"
        text="left"
      >
        <Heading fontSize="2em">{title}</Heading>
        <Text>${price}</Text>
        <Text fontSize="14px" pb="4px">
          {description}
        </Text>
        <Box width="100%" display="flex" justifyContent="center">
          <Button color="black" mr="8px">Add to Cart</Button>
          <Button color="black">View Item</Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductCard;
