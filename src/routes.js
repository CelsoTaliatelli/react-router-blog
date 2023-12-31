import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/sobreMim";
import Menu from "./componentes/menu";
import Rodape from "./componentes/rodape";
import PaginaPadrao from "./componentes/PaginaPadrao";
import Post from "./paginas/Post";
import NaoEncontrada from "./paginas/NaoEncontrada";
import ScrollToTop from "./componentes/ScrollToTop";

function AppRoutes() {
  return(
    <BrowserRouter>
    <ScrollToTop />
      <Menu />
        
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path="/sobremim" element={<SobreMim />} />
          </Route>
          <Route path="/posts/:id" element={<Post />} />

          {/* 
            Na rota "/" a estrutura a ser rendereizada é:
            <PaginaPadrao>
              <Inicio />
            </PaginaPadrao>
          
          */}

          {/* 
            Na rota "/sobremim" a estrutura a ser rendereizada é:
            <PaginaPadrao>
              <SobreMim />
            </PaginaPadrao>
          
          */}
         
          <Route path="*" element={<NaoEncontrada /> } />
        </Routes>
      
      <Rodape />
    </BrowserRouter>
  );
 
}

export default AppRoutes;
