import ProductCard from "../../components/Products/ProductCard";
import { DUMMY_ITEMS } from "../../helpers/dummy-items";
import { Box } from '@chakra-ui/react';

const ProductGallery = ({ items }) => {
  return (
    <Box height="400px">
      {items.map((item) => (
        <ProductCard
          title={item.title}
          price={item.price}
          description={item.description}
        />
      ))}
    </Box>
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
