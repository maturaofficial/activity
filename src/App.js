import Index from "./components/Index";
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home'
import Login from "./components/Login";
import { BrowserRouter, Routes , Route } from 'react-router-dom';


export default function App() {
  return (
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />}>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>
    
  );
}
