import { Text } from '@chakra-ui/react';

const MarqueeText = ({ displayText }) => {
    return(
        <Text fontSize="4rem" width="80%" color="red" textAlign="center">
            {displayText}
        </Text>
    )
};

export default MarqueeText;