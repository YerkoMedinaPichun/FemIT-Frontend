import React from "react";
import { Button, Navbar, Logo } from "../../components";
import "./landingPage.css";
import { ReactComponent as Ilustracion01 } from "./assets/ilustracion_01.svg";
import { ReactComponent as Ilustracion02 } from "./assets/ilustracion_02.svg";
import { ReactComponent as Ilustracion03 } from "./assets/ilustracion_03.svg";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Link } from "react-router-dom";

const LandingPage = () => {
  let isLargerThan1020 = useMediaQuery("(min-width:1020px)");

  if (window.innerWidth >= 1020) {
    isLargerThan1020 = true;
  }

  return (
    <>
      <header>
        <Navbar bgcolor="bg-color-primary">
          <Logo color="color-gris-06" />
          <Link to="/LoginPage">
            <Button color="color-gris-06" bgcolor="bg-color-secondary">
              Iniciar Sesión
            </Button>
          </Link>
        </Navbar>
      </header>
      <main>
        <section className={`section ${isLargerThan1020 ? "sm" : "xs"}`}>
          <div className="column">
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
            <Link to="/RegisterPage">
              <Button
                color="color-gris-06"
                bgcolor="bg-color-secondary"
                size="big"
              >
                Crear Cuenta
              </Button>
            </Link>
          </div>
          <div className="column">
            <Ilustracion01 className="svg" />
          </div>
        </section>
        <section className={`section ${isLargerThan1020 ? "sm" : "xs"}`}>
          <div className="column">
            <Ilustracion02 className="svg" />
          </div>
          <div className="column">
            <p>
              Somos una comunidad de mujeres dedicadas a la tecnología y estamos
              aquí para apoyarte en cada paso de tu camino.
            </p>
            <p>
              En FemIT encontrarás un amplio abanico de perfiles profesionales
              que buscan crecer y hacer una diferencia en el mundo de la
              tecnología.
            </p>
          </div>
        </section>
        <section className={`section ${isLargerThan1020 ? "sm" : "xs"}`}>
          <div className="column">
            <p>
              Además, nuestra plataforma está diseñada para facilitar la
              conexión entre reclutadores/as y talentosas mujeres de IT, lo que
              significa que tendrás acceso a oportunidades laborales exclusivas
              en la industria.
            </p>
          </div>
          <div className="column">
            <Ilustracion03 className="svg" />
          </div>
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
