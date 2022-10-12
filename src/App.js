import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import injectContext from "./store/AppContext";
import Home from "./views/Home";
import Login from "./componet/Login";
<<<<<<< Updated upstream
import Registration from "./componet/Registration";
=======
import CardTajetas from "../src/componet/Productos";
>>>>>>> Stashed changes
function App(){
    return(
<BrowserRouter>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/login" element={< Login />} />
<<<<<<< Updated upstream
<Route path="/registration" element={<Registration/>} />
=======
<Route path="/CardTajetas" element={<CardTajetas/>}  />
>>>>>>> Stashed changes
</Routes>
</BrowserRouter>
    );
}

export default injectContext(App);