import React from 'react';
import { Box, Button, Center, ChakraProvider, Input, Text } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";

function Atendimento() {
  return (
    <ChakraProvider>
      <Header />
      <Box p={4}>
        <Center>
          <Box textAlign="center">
            <Text fontSize="3xl" fontWeight="bold" mb={2}>
            Assinatura digital de documentos
            </Text>
            <Text fontSize="2xl" fontWeight="semibold" mb={14}>Com atendimento</Text>
            <Text fontSize="lg" mb={12}>
              Favor informar o número do atendimento
            </Text>
            <Box>
            <Input placeholder='Digite aqui' mb={6} width="300px" />
            </Box>
            <Link to={'/confirmar-dados'}>
            <Button colorScheme="green">
              Confirmar
            </Button>
            </Link>
          </Box>
        </Center>
      </Box>
      <Footer />
    </ChakraProvider>
  );
}

export default Atendimento;