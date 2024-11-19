import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";

  

const App = () => {
 
  return (
    <div>
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/About" element={<About/>}/>
     <Route path="/Contact" element={<Contact/>}/>
     <Route path="/Menu" element={<Menu/>}/>
     <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
