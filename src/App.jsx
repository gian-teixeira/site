import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'

import Home from './pages/Home/Home'
import Members from './pages/Members/Members'
import Statute from './pages/Statute/Statute'
import Contact from './pages/Contact/Contact'

import './App.css'
import './Animation.css'
import ufsjLogo from './assets/ufsj.jpg'

function App() {
  return (
    <div className="App">
      <div id="top-bar">
        <img id="ufsj" src={ufsjLogo} alt="UFSJ Logo" />
      </div>
      <Router>
        <Header />
      </Router>

      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/membros" element={<Members />}/>
          <Route path="/estatuto" element={<Statute />}/>
          <Route path="/contato" element={<Contact />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
