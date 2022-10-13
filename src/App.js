import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import injectContext from "./store/AppContext";
import Home from "./views/Home";
import Login from "./componet/Login";
import Registration from "./componet/Registration";
 import CardTajetas from "../src/componet/Productos";
 
function App(){
    return(
<BrowserRouter>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/login" element={< Login />} />
<Route path="/registration" element={<Registration/>} />
<Route path="/private" element={<private/>} />
<Route path="/CardTajetas" element={<CardTajetas/>}  />
</Routes>
</BrowserRouter>
    );
}

export default injectContext(App);