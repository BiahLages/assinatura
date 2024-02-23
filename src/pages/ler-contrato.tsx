import React from "react";
import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Text,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function LerContrato() {
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
              Contrato 1
            </Text>
            <Box width={'800px'} borderWidth='2px' borderRadius='2xl' overflow='hidden' p={4} mb={6}>
            <Text>
              {" "}
              Lorem ipsum ad in nam orci inceptos etiam curabitur luctus justo,
              mattis et risus iaculis pulvinar a vel lobortis condimentum duis,
              cras ullamcorper libero malesuada aliquam neque curae fames elit.
              posuere donec et at quisque bibendum tristique quam lobortis,
              nostra mollis dui tempus pulvinar etiam condimentum dapibus etiam,
              ut auctor consequat quisque nulla ornare magna. <br />Id class eleifend
              eu tincidunt lacinia metus erat, orci consequat quam leo
              phasellus. sit nec donec netus elit vitae proin taciti eget
              sollicitudin laoreet, donec dui duis lacinia dapibus fermentum
              cursus blandit conubia. <br />Ut pharetra potenti praesent magna
              vestibulum tempor ante non sem aenean, pellentesque mi augue ipsum
              non dapibus pulvinar nullam egestas proin, pharetra massa ut nunc
              cubilia justo rutrum tortor laoreet. Rhoncus urna lobortis ut
              bibendum varius accumsan sagittis ullamcorper leo, adipiscing
              placerat porta mauris sem aliquam pretium lectus, tortor porta
              donec posuere dui aliquet class primis. purus feugiat senectus
              commodo non proin turpis tempor varius posuere, semper praesent
              aliquam adipiscing etiam placerat augue cras proin morbi, potenti
              commodo arcu magna convallis viverra velit ipsum. eget nec
              inceptos nibh vivamus himenaeos proin conubia, imperdiet pretium
              iaculis nisi inceptos neque pharetra augue, dui inceptos viverra
              dolor nibh pretium. metus quam platea bibendum viverra vivamus
              potenti tempor, maecenas suscipit ac mauris etiam nullam
              habitasse, id nisl nibh sodales volutpat in, auctor dui arcu donec
              neque hac.{" "}
            </Text>
            </Box>
            <Link to={"/assinatura"}>
            <Button colorScheme="green" mb={20}>Aceitar e avançar</Button>
            </Link>
          </Box>
        </Center>
      </Box>
      <Footer />
    </ChakraProvider>
  );
}

export default LerContrato;
