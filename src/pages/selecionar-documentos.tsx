import React, { useState } from 'react';
import { Box, Button, Center, ChakraProvider, Text, Checkbox, VStack } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function SelecionarDocumento() {
  const [opcoesSelecionadas, setOpcoesSelecionadas] = useState<string[]>([]);

  const handleOpcaoSelecionada = (opcao: string) => {
    if (opcoesSelecionadas.includes(opcao)) {
      setOpcoesSelecionadas(opcoesSelecionadas.filter(item => item !== opcao));
    } else {
      setOpcoesSelecionadas([...opcoesSelecionadas, opcao]);
    }
  };

  return (
    <ChakraProvider>
      <Header />
      <Box p={4}>
        <Center>
          <Box textAlign="center">
            <Text fontSize="3xl" fontWeight="bold" mb={2}>
              Assinatura digital de documentos
            </Text>
            <Text fontSize="lg" mb={6}>
              Selecione os documentos que serão assinados:
            </Text>
            <Box borderWidth='2px' borderRadius='2xl' overflow='hidden' p={2} mb={6}>
              <VStack align="center">
                <Checkbox isChecked={opcoesSelecionadas.includes("opcao1")} onChange={() => handleOpcaoSelecionada("opcao1")}>
                  Opção 1
                </Checkbox>
                <Checkbox isChecked={opcoesSelecionadas.includes("opcao2")} onChange={() => handleOpcaoSelecionada("opcao2")}>
                  Opção 2
                </Checkbox>
                <Checkbox isChecked={opcoesSelecionadas.includes("opcao3")} onChange={() => handleOpcaoSelecionada("opcao3")}>
                  Opção 3
                </Checkbox>
                <Checkbox isChecked={opcoesSelecionadas.includes("opcao4")} onChange={() => handleOpcaoSelecionada("opcao4")}>
                  Opção 4
                </Checkbox>
              </VStack>
            </Box>
            <Link to={"/ler-contrato"}>
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

export default SelecionarDocumento;
