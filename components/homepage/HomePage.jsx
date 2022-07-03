import { Box, Flex } from "@chakra-ui/react";
import MainNav from "../nav/MainNav.jsx";
import Marquee from "../homepage/Marquee.jsx";

const HomePage = () => {
  return (
    <Flex direction="column" height="100vh">
      <Box padding="4">
        {/* <Box height="50px" bg="#820606">
          <MainNav />
        </Box> */}
        <Box>
          <Marquee />
        </Box>
      </Box>
    </Flex>
  );
};

export default HomePage;
