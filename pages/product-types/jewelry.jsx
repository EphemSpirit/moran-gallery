import ProductCard from "../../components/Products/ProductCard";
import { DUMMY_ITEMS } from "../../helpers/dummy-items";
import { Flex, Heading, Box, Fade } from "@chakra-ui/react";

const ProductGallery = ({ items }) => {
  return (
    <>
      <Box
        backgroundImage="url('/assets/ship_background.jpeg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Heading mb="12px" textAlign="center" width="100vw" color="white">
          Jewelry Items
        </Heading>
        <Flex
          direction="row"
          flexWrap="wrap"
          justifyContent="space-around"
          mb="12"
          gap="2"
        >
          {items.map((item) => (
            <ProductCard
              title={item.title}
              price={item.price}
              description={item.description}
            />
          ))}
        </Flex>
      </Box>
    </>
  );
};

export const getStaticProps = () => {
  const matchingProducts = DUMMY_ITEMS.filter(
    (item) => item.type.toLowerCase() === "jewelry"
  );

  return {
    props: {
      items: matchingProducts,
    },
  };
};

export default ProductGallery;
