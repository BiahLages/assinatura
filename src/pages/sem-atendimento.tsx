import React, { useState } from 'react';
import { Box, Button, Center, ChakraProvider, Input, Text, FormControl, FormLabel, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function SemAtendimento() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    dataNascimento: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleConfirm = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
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
            <Text fontSize="2xl" fontWeight="semibold" mb={14}>
              Sem atendimento
            </Text>
            <Text fontSize="lg" mb={6}>
              Preencha os campos abaixo:
            </Text>
            <FormControl mb={4}>
              <FormLabel>Nome</FormLabel>
              <Input name="nome" value={formData.nome} onChange={handleChange} placeholder='Digite seu nome'></Input>
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>CPF</FormLabel>
              <Input name="cpf" value={formData.cpf} onChange={handleChange} placeholder='Digite seu CPF'></Input>
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Data de Nascimento</FormLabel>
              <Input name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} type="date" placeholder='Digite sua data de nascimento'></Input>
            </FormControl>
            <Button colorScheme="green" onClick={handleConfirm}>
              Confirmar
            </Button>
          </Box>
        </Center>
      </Box>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirme suas informações</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Nome: {formData.nome}</Text>
            <Text>CPF: {formData.cpf}</Text>
            <Text>Data de Nascimento: {formData.dataNascimento}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleClose}>
              Fechar
            </Button>
            <Link to={"/selecionar-documentos"}>
            <Button colorScheme="green">
              Confirmar
            </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Footer />
    </ChakraProvider>
  );
}

export default SemAtendimento;
