import React, { useEffect, useContext } from 'react';
import { Context } from "../store/AppContext";
import ComponentNavbar from "../componet/ComponentNavbar";

import ComponentCarrusel from "../componet/ComponentCarrusel";
import Footer from '../componet/ComponenteFooter';
import CardsdeGrupo from "./CardsdeGrupo";

const Home = () =>{
    return(
<>
<ComponentNavbar/>
<h1>Bienvenidos </h1>
 <h4>Acompañando a las Pymes hace más de 50 años y en las difíciles, ¡mucho más!</h4>
<ComponentCarrusel/>
<h5>Empieza hoy a comprar y vender con nosotros</h5>
<CardsdeGrupo/>

<Footer/>


</>
    );
}

export default Home;