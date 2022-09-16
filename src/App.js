import './App.css';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { Project } from './components/Project';
import { Description } from './components/Description';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Mes_projet" element={<Project />} />
          <Route path="/About_Me" element={<Description />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
