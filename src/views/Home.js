import ComponentNavbar from "../componet/ComponentNavbar";
import {Container} from "react-bootstrap";
import ComponentCarrusel from "../componet/ComponentCarrusel";
import Footer from '../componet/ComponenteFooter';
import CardsdeGrupo from "./CardsdeGrupo";


const Home = () => {
    return (
        <>
           
                <ComponentNavbar />
               
                <div style={{ backgroundImage: "linear-gradient(#d8af97, #edb8fa)", }}>
                    <br />

                    <ComponentCarrusel />
                    <br />
                    <br />
                    <h1 style={{ textAlign: "center", textShadow: "2px 2px 5px #ba9df4" }} >Empieza hoy a comprar y vender con nosotros</h1>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <CardsdeGrupo />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Footer  />

                </div>
           
        </>

    );
}

export default Home;