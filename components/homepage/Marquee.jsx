import { Flex, Box, Center, Image, Slide } from "@chakra-ui/react";
import MarqueeText from "./MarqueeText.jsx";

const Marquee = ({ isMobile }) => {
  const bannerText =
    "The great object of life is sensation - to feel that we exist, even though in pain.\n-Lord Byron";

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
      <Center>
        <Slide
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100vw"
          in={true}
          direction="left"
          style={{
            top: "150px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
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
          <MarqueeText displayText={bannerText} />
        </Slide>
      </Center>
    </Flex>
  );
};

export default Marquee;
