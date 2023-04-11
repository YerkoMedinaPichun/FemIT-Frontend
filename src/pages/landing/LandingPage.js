import React from "react";
import { Button, Navbar, Logo} from "../../components";
import "./landingPage.css";
import RegisterPage from "../register/RegisterPage";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <header>
        <Navbar bgcolor="bg-color-primary">
          <Logo color="color-gris-06" />
          <Button color="color-gris-06" bgcolor="bg-color-secondary">
            Iniciar Sesión
          </Button>
        </Navbar>
      </header>
      <main>
        <section>
          <div className="section-01-column-01">
            <h2>¡Únete a FemIT!</h2>
            <p>
              El lugar perfecto para conectar con otras mujeres de la industria,
              compartir experiencias y oportunidades laborales.
            </p>
            <p>
              Únete a nuestra comunidad de mujeres en la tecnología y descubre
              cómo FemIT puede ayudarte a alcanzar tus metas profesionales y
              personales. ¡Te esperamos!
            </p>
          <Link to="/RegisterPage" 
            
             > <Button color="color-gris-06"
             bgcolor="bg-color-secondary"
             size="big">Crear Cuenta</Button>
            </Link> 
            
          </div>
          <div className="section-01-column-01"></div>
        </section>
      </main>
      <footer>
        <Navbar bgcolor="bg-color-gris-03">
          <Logo color="color-primary" />
        </Navbar>
      </footer>
    </>
  );
};

export default LandingPage;
