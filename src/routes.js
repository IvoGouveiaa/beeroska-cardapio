import { BrowserRouter, Routes, Router, Route } from "react-router-dom";

import Header from "./Components/index";
import CardapioBebidas from "./paginas/CardapioBebidas";
import CardapioComidas from "./paginas/CardapioComidas";
import Home from "./paginas/Home";

function RouterApp(){
return(

<BrowserRouter>

<Header/>

<Routes>
    <Route path = "/cardapioc" element = {<CardapioComidas/>} />
    <Route path = "/cardapiob" element = {<CardapioBebidas/>} />
    <Route path = "/" element = {<Home/>} />
</Routes>
</BrowserRouter>

)
}
export default RouterApp;