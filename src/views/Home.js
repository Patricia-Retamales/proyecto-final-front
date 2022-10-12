import React, { useEffect, useContext } from 'react';
import { Context } from "../store/AppContext";
import ComponentNavbar from "../componet/ComponentNavbar";
import Productos from "../componet/Productos"

const Home = () =>{
    return(
<>
<ComponentNavbar/>
<Productos />
</>
    );
}

export default Home;