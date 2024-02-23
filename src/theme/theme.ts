import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      100: "rgba(26,115,232,1)",
      80: "rgba(26,115,232,.8)"
    },
    status: {
        recebido: "green", 
        emAberto: "red",  
      },
  },
  fonts: {
    body: "Inter, sans-serif"
  },
  styles: {
    global: {
      body: {
        backgroundColor: "#fafafa",
        pb: "20px"
      }
    }
  },
  breakpoints: {
    sm: "30em",  // 480px
    md: "48em",  // 768px
    lg: "62em",  // 992px
    xl: "80em",  // 1280px
  },
  
});

export default theme;