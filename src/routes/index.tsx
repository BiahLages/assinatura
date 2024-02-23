import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Atendimento from "../pages/com-atendimento";
import React from "react";
import SemAtendimento from "../pages/sem-atendimento";
import ConfirmarDados from "../pages/confirmar-dados";
import Assinatura from "../pages/assinatura";
import LerContrato from "../pages/ler-contrato";
import SelecionarDocumento from "../pages/selecionar-documentos";


const AppRoutes = () => {

  return (
    <Routes>
        <Route 
        path="/"
        element={
            <Home/>
        }
        />
        <Route 
        path="/atendimento"
        element={
            <Atendimento/>
        }
        />
        <Route 
        path="/sem-atendimento"
        element={
            <SemAtendimento/>
        }
        />
        <Route 
        path="/confirmar-dados"
        element={
            <ConfirmarDados/>
        }
        />
        <Route 
        path="/assinatura"
        element={
            <Assinatura/>
        }
        />
        <Route 
        path="/ler-contrato"
        element={
            <LerContrato/>
        }
        />
        <Route 
        path="/selecionar-documentos"
        element={
            <SelecionarDocumento/>
        }
        />
      
    </Routes>
  );
};

export default AppRoutes;