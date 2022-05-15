import { Flex, Spacer, Text } from "@chakra-ui/react";
import ShowcaseCard from "../UI/ShowcaseCard.jsx";

const Showcase = () => {
  return (
    <>
      <Flex
        align="center"
        justify="center"
        height="100%"
        px="120"
        pb="25"
        wrap="wrap"
        direction="column"
        bg="#820606"
      >
        <Text mb="20" fontWeight="bold" fontSize="2rem" color="#0E131F">
          Specialties
        </Text>
        <Flex width="100%">
          <ShowcaseCard />
          <Spacer />
          <ShowcaseCard />
          <Spacer />
          <ShowcaseCard />
          <Spacer />
          <ShowcaseCard />
        </Flex>
      </Flex>
    </>
  );
};

export default Showcase;
