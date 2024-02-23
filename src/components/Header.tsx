import React from 'react';
import { Flex, Box, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      padding="1rem"
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
    >

      <Box>
        <Image src='/assets/images/logo.png' alt='Logo' style={{ maxWidth: '120px' }}/>
      </Box>
      
      <Flex align="center">
        <Box marginRight="2rem">
        <Link to="/">
            <Text fontSize="lg">Início</Text>
          </Link>
        </Box>
        <Box>

          <Text fontSize="lg" cursor="pointer">Sair</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Header;
