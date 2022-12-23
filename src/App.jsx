import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'

import Home from './pages/Home/Home'
import Team from './pages/Team/Team'
import Statute from './pages/Statute/Statute'
import Contact from './pages/Contact/Contact'

import './App.css'
import './Animation.css'
import ufsjLogo from './assets/ufsj.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init({
    duration: 1000
  })

  return (
    <div className="App">
      <div id="top-bar">
        <img id="ufsj" src={ufsjLogo} alt="UFSJ Logo" />
      </div>
      
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/team" element={<Team />}/>
          <Route path="/estatuto" element={<Statute />}/>
          <Route path="/contato" element={<Contact />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
