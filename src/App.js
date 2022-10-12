import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import injectContext from "./store/AppContext";
import Home from "./views/Home";
import Login from "./componet/Login";
import Registration from "./componet/Registration";
function App(){
    return(
<BrowserRouter>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/login" element={< Login />} />
<Route path="/registration" element={<Registration/>} />
</Routes>
</BrowserRouter>
    );
}

export default injectContext(App);