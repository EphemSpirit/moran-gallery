import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Box,
  Spacer,
  Heading,
  Text
} from "@chakra-ui/react";
import CartButton from "../Cart/CartButton.jsx";
import Link from 'next/link'

const MainNav = () => {
  const fullMenu = (
    <>
      <Box color="white">
        <Breadcrumb pt="3" pr="8" separator="	&#8226;">
          <BreadcrumbItem>
            <BreadcrumbLink href="#" _hover={{ textDecoration: "none" }}>
              <Text>About</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#" _hover={{ textDecoration: "none" }}>
              <Text>Contact</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#" _hover={{ textDecoration: "none" }}>
              <Text>Portraits</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#" _hover={{ textDecoration: "none" }}>
              <Text>Embroidery</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/product-types/jewelry" _hover={{ textDecoration: "none" }}>
              <Text>Jewelry</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Spacer />
      </Box>
      <CartButton />
    </>
  );

  return (
    <>
      <Flex px="8" py="8" bg="black" justifyContent="space-between">
        <Box bg="black">
          <Heading size="md" pt="1" color="white">
            <Link href={'/'}>
              Emily Leslie-Moran
            </Link>
          </Heading>
        </Box>
        {fullMenu}
      </Flex>
    </>
  );
};

export default MainNav;
