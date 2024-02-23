import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import AppRoutes from "./routes/index";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      
      <Router> 

          <AppRoutes />
 
        </Router>
      
    </ChakraProvider>
  );
};

export default App;