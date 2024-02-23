import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <Flex
      as="footer"
      align="center"
      justify="space-between"
      width="100%"
      py={4}
      bg="blue.800"
      color="white"
      position="fixed"
      bottom={0}
      left={0}
    >
      <Box ml={4}>
        <Text>Política de Privacidade</Text>
      </Box>
      <Box mr={4}>
        <Text>© 2024</Text>
      </Box>
    </Flex>
  );
};

export default Footer;
