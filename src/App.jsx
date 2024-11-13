import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ProSideBar from './components/ProSideBar/ProSideBar';
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading"; // Importe o componente de Loading

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Exibe o loading ao iniciar a troca de rota
    setIsLoading(true);

    // Desativa o loading após a animação
    const timer = setTimeout(() => setIsLoading(false), 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Nav />
      <ProSideBar />
      <Loading isLoading={isLoading} /> {/* Exibe o componente de Loading */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
