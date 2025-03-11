import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import './App.css'

import Accueil from './assets/components/Accueil'
import Apropos from './assets/components/Apropos'
import Contact from './assets/components/Contact'
import Service from './assets/components/Service'
import BancAccount from "./assets/components/BancAccount";
import NotFound from './assets/components/NotFound'

function App() {
  return (
    <Router>
      <nav>
        <Link to='/'>Accueil</Link>
        <Link to='/Apropos'>A Propos</Link>
        <Link to='/Service'>Nos Servis</Link>
        <Link to='/Contact'>Nos Contacts</Link>
        <Link to='/BancAccount'>Deposer / Retirer</Link>
      </nav>
       
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/BancAccount" element={<BancAccount />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </Router>
  );
}

export default App;
