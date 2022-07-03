import { Box, Flex, Fade, useMediaQuery } from "@chakra-ui/react";
import MainNav from '../components/nav/MainNav.jsx';
import Marquee from "../components/homepage/Marquee.jsx";
import MobileNav from '../components/nav/MobileNav.jsx';

import '@fontsource/sawarabi-gothic/';
import '@fontsource/nanum-gothic'

const Home = () => {
    const [isMobile] = useMediaQuery('(max-width: 768px)');

    return (
        <Fade in={true} style={{ transitionDuration: "1s" }}>
            <Flex direction="column" height="100vh">
                <Box>
                    <Box height="px" backgroundImage="url('/assets/ship_background.jpeg')" backgroundPosition="center" backgroundRepeat="no-repeat">
                        <Marquee isMobile={isMobile} />
                    </Box>
                </Box>
            </Flex>
        </Fade>
    )
};

export default Home;

// export function getStaticProps() {
//     return {
//         props: {
//             message: 
//         }
//     }
// }

// export function getServerSideProps() {
//     const [isMobile] = useMediaQuery()
//     console.log("HELLO")
// }