import React from 'react';
import { Box, Button, Center, ChakraProvider, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Assinatura() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleConfirmar = () => {

    onOpen();
  };

  return (
    <ChakraProvider>
      <Header />
      <Box p={4}>
        <Center>
          <Box  textAlign="center">
            <Text fontSize="3xl" fontWeight="bold" mb={2}>
              Assinatura digital de documentos
            </Text>
            <Text fontSize="lg" mb={6}>
              Assinatura para os documentos
            </Text>
            <Box borderWidth='2px' borderRadius='2xl' overflow='hidden' p={2} mb={6} height={40}>
              
            </Box>
            <Button colorScheme="green" onClick={handleConfirmar}>
              Confirmar
            </Button>
          </Box>
        </Center>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Assinatura Confirmada</ModalHeader>
          <ModalBody>
            Os documentos foram assinados com sucesso.
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Footer />
    </ChakraProvider>
  );
}

export default Assinatura;
