import { Flex, Box, Text, Image, Fade, Slide } from "@chakra-ui/react";

const Marquee = ({ isMobile }) => {
  return (
    <Flex
      align="center"
      justifyContent="center"
      alignItems="center"
      direction="column"
      backgroundImage="url('/assets/ship_background.jpeg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      width="100%"
      height="100vh"
      className="im-here"
    >
      <Slide
        width="100vw"
        in={true}
        direction="left"
        style={{ left: `${isMobile ? "15vw" : "40vw"}`, top: "150px" }}
      >
        <Box
          height="300px"
          width="300px"
          mt="50px"
          border="1px"
          borderRadius="50%"
          mb="50px"
        >
          <Image
            src="/assets/prof.jpeg"
            alt="farnsworth portrait"
            borderRadius="50%"
          />
        </Box>
        <Text pb="20" color="#E8FCC2">
          I don't want to live on this planet anymore
        </Text>
      </Slide>
    </Flex>
  );
};

export default Marquee;
