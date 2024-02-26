import React from "react";
import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Text,
} from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function ConfirmarDados() {
  return (
    <ChakraProvider>
      <Header />
      <Box p={4}>
        <Center>
          <Box textAlign="center">
            <Text fontSize="3xl" fontWeight="bold" mb={2}>
              Assinatura digital de documentos
            </Text>
            <Text fontSize="2xl" fontWeight="semibold" mb={14}>
              Com atendimento
            </Text>
            <Text fontSize="lg" mb={6}>
              Confirme os dados do atendimento
            </Text>
            <Box borderWidth='2px' borderRadius='2xl' overflow='hidden' p={2} mb={6}>
              <Box mb={4}>
              <Text fontWeight="semibold">Dados do paciente:</Text>
              <Text>Ana Luiza Batista</Text>
              <Text>111.111.111-11</Text>
              <Text>01/01/1992</Text>
              </Box>
              <Box>
              <Text fontWeight="semibold">Dados do responsável:</Text>
              <Text>Maria Batista</Text>
              <Text>111.111.111-11</Text>
              <Text>01/01/1959</Text>
              </Box>
            </Box>
            <Link to={"/selecionar-documentos"}>
            <Button colorScheme="green" mb={10}>Confirmar</Button>
            </Link>
          </Box>
        </Center>
      </Box>
      <Footer />
    </ChakraProvider>
  );
}

export default ConfirmarDados;
