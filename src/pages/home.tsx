import React from "react";
import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Text,
  VStack,
} from "@chakra-ui/react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  return (
    <ChakraProvider>
      <Header />
      <Box p={4}>
        <Center>
          <Box textAlign="center">
            <Text fontSize="3xl" fontWeight="bold" mb={10}>
              Assinatura digital de documentos
            </Text>
            <Text fontSize="lg" mb={14}>
              Bem vindo(a) ao portal de assinatura digital!
              <br />
              Selecione uma das opções para iniciar o processo de assinatura:
            </Text>

            <VStack display={"flex"} flexDir={"column"} mt={4} gap={6}>
              <Link to={"/atendimento"}>
                <Button colorScheme="blue" width={"200px"}>
                  Com atendimento
                </Button>
              </Link>
              <Link to={"/sem-atendimento"}>
                <Button colorScheme="green" width={"200px"}>
                  Sem atendimento
                </Button>
              </Link>
            </VStack>
          </Box>
        </Center>
      </Box>
      <Footer />
    </ChakraProvider>
  );
}

export default Home;
