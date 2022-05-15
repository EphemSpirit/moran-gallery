import { Text } from '@chakra-ui/react';

const MarqueeText = ({ displayText }) => {
    return(
        <Text fontSize="8rem">
            {displayText}
        </Text>
    )
};

export default MarqueeText;