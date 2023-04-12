import "./InspirationPage.css";
import { Carousel } from "../../components";
import { women } from "../../components/carousel/Data";

function InspirationPage() {
  return (
    <div className="App">
      <div className="topContent">
        <h2>Inspiración</h2>
        <p>Mujeres referentes</p>
      </div>
      {/* Carousel */}
      <Carousel images={women} />
    </div>
  );
}

export default InspirationPage;
