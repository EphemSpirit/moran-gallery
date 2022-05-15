import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Box,
  Spacer,
  Heading,
  Text,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';
import { GiHamburgerMenu } from "react-icons/gi";

const MainNav = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)')

  const fullMenu = (
    <>
      <Box color="white">
        <Breadcrumb pt="3" pr="8" separator=" ">
          <BreadcrumbItem>
            <BreadcrumbLink href="#">
              <Text>About</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">
              <Text>Contact</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">
              <Text>Portraits</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">
              <Text>Embroidery</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">
              <Text>Jewelry</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Spacer />
      </Box>
      <Button color="white">All Products</Button>
    </>
  );

  return (
    <Flex px="8" py="8" bg="black" justifyContent="space-between">
      <Box bg="black">
        <Heading size="md" pt="1" color="white">
          Emily Moran
        </Heading>
      </Box>
      {fullMenu}
    </Flex>
  );
};

export default MainNav;

// export function getServerSideProps() {
//   const [isMobile] = useMediaQuery('(max-width: 768px)');

//   console.log(`Mobile: ${isMobile}`)
//   console.log('HEELO')

//   return {
//     props: {
//       isMobile: isMobile
//     }
//   }
// }
