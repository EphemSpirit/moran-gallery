import { Box, Text, Flex } from '@chakra-ui/react';

const ProductCard = ({ title, description, price}) => {
    return (
        <Flex direction="column" width="350px" height="100%" border="1px">
            <Box>
                <Box borderBottom="1px" height="66%">
                    Image go here - {title}
                </Box>
                <Flex direction="column" justifyContent="center" height="33%">
                    <Text mb="12px" fontWeight="bold">${price}</Text>
                    <Text>{description}</Text>
                </Flex>
            </Box>
        </Flex>
    )
};

export default ProductCard;