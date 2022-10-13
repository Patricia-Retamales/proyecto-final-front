import React, { useEffect, useContext } from 'react';
import { Context } from "../store/AppContext";
import ComponentNavbar from "../componet/ComponentNavbar";
import Productos from "../componet/Productos"
import ComponentCarousel from '../componet/ComponentCarrusel';

const Home = () =>{
    return(
<>
<ComponentNavbar/>
<ComponentCarousel/>
<Productos />
</>
    );
}

export default Home;