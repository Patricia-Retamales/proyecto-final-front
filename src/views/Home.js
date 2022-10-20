import React, { useEffect, useContext } from 'react';
import { Context } from "../store/AppContext";
import ComponentNavbar from "../componet/ComponentNavbar";

import ComponentCarrusel from "../componet/ComponentCarrusel";
import Footer from '../componet/ComponenteFooter';
import CardsdeGrupo from "./CardsdeGrupo";

const Home = () =>{
    return(
<div style={{ backgroundImage:"linear-gradient(#d8af97, #edb8fa)", }}>
<ComponentNavbar/>
<br/>

<ComponentCarrusel/>
<br/>
<br/>
<h1  style={{textAlign:"center" , textShadow:"2px 2px 5px #ba9df4"}} >Empieza hoy a comprar y vender con nosotros</h1>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<CardsdeGrupo/>




</div>
    );
}

export default Home;