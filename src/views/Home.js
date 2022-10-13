import React, { useEffect, useContext } from 'react';
import { Context } from "../store/AppContext";
import ComponentNavbar from "../componet/ComponentNavbar";
import Productos from "../componet/Productos"
import ComponentCarrusel from "../componet/ComponentCarrusel";
import {Footer} from '../componet/ComponenteFooter';

const Home = () =>{
    return(
<>
<ComponentNavbar/>
<ComponentCarrusel/>
<Productos />
<Footer/>


</>
    );
}

export default Home;