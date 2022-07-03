import ProductCard from "../../components/Products/ProductCard.jsx";
import { DUMMY_ITEMS } from "../../helpers/dummy-items";
import { Flex, Box, Heading, Fade } from "@chakra-ui/react";

const Portraiture = ({ items }) => {
  return (
    <>
      <Fade in={true} style={{ transitionDuration: "1s" }}>
        <Box
          backgroundImage="url('/assets/ship_background.jpeg')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          height="86vh"
        >
          <Heading mb="12px" textAlgin="center" width="100vw" color="white">
            Portraits
          </Heading>
          <Flex
            direction="row"
            flexWrap="wrap"
            justifyContent="space-around"
            gap="2"
          >
            {items.map((item) => (
              <ProductCard
                key={Math.random()}
                title={item.title}
                price={item.price}
                description={item.description}
              />
            ))}
          </Flex>
        </Box>
      </Fade>
    </>
  );
};

export const getStaticProps = () => {
  const portraitureItems = DUMMY_ITEMS.filter(
    (x) => x.type.toLowerCase() === "portraiture"
  );

  return {
    props: {
      items: portraitureItems,
    },
  };
};

export default Portraiture;
