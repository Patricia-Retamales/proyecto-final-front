import React, { useEffect, useContext } from 'react';
import { Context } from "../store/AppContext";
import ComponentNavbar from "../componet/ComponentNavbar";
import Productos from "../componet/Productos"
import ComponentCarrusel from "../componet/ComponentCarrusel";

const Home = () =>{
    return(
<>
<ComponentNavbar/>
<ComponentCarrusel/>
<Productos />

</>
    );
}

export default Home;