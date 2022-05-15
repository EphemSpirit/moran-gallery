import { Box, Text, Flex, Image } from "@chakra-ui/react";

const ShowcaseCard = () => {
  return (
    <Box
      height="250px"
      width="200px"
      border="1px"
      borderRadius="5px"
      backgroundColor="white"
      shadow="md"
    >
      <Box borderBottom="1px" height="70%" textAlign="center">
        <Image
          src="/assets/prof_portal.jpeg"
          alt="professor card image"
          height="100%"
          width="100%"
        />
      </Box>
      <Flex
        direction="column"
        height="30%"
        align="center"
        justify="center"
        pt="3"
        backgroundColor="#EED7C5"
      >
        <Text>Item Description</Text>
        <Text>View More</Text>
      </Flex>
    </Box>
  );
};

export default ShowcaseCard;
