import React, { useState } from 'react';
import { Box, Button, Center, ChakraProvider, Input, Text, FormControl, FormLabel, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Checkbox } from '@chakra-ui/react';
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
  const [opcoesSelecionadas, setOpcoesSelecionadas] = useState<string[]>([]);

  const handleOpcaoSelecionada = (opcao: string) => {
    if (opcoesSelecionadas.includes(opcao)) {
      setOpcoesSelecionadas(opcoesSelecionadas.filter(item => item !== opcao));
    } else {
      setOpcoesSelecionadas([...opcoesSelecionadas, opcao]);
    }
  };

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
              <FormLabel>Código do paciente</FormLabel>
              <Input name="nome" value={formData.nome} onChange={handleChange} placeholder='Digite o código'></Input>
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Código do responsável</FormLabel>
              <Input name="cpf" value={formData.cpf} onChange={handleChange} placeholder='Digite o código'></Input>
            </FormControl>
            <FormControl mb={4}>
            <Checkbox isChecked={opcoesSelecionadas.includes("opcao1")} onChange={() => handleOpcaoSelecionada("opcao1")}>
                  Selecione se o paciente for o responsável
                </Checkbox>
            </FormControl>
            <Button colorScheme="green" mb={10} onClick={handleConfirm}>
              Confirmar
            </Button>
          </Box>
        </Center>
      </Box>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirme as informações</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Nome: Fulano Beltrano da Silva</Text>
            <Text>CPF: 111.111.111-11</Text>
            <Text>Data de Nascimento:01/01/1990</Text>
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
