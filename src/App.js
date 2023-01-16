import { useState } from 'react';
import './App.css';
import NavBar from './navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Coin from './pages/Coin';
import NFTs from './pages/NFTs';
import P2E from './pages/P2E';
import Home from './pages/Home';
import Team from './pages/Team';
import Support from './pages/Support';

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="moving-background">
      <div className="App">
        <BrowserRouter>
          <NavBar accounts = {accounts} setAccounts = {setAccounts} />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/pages/Coin' element={<Coin accounts = {accounts} setAccounts = {setAccounts}/>} />
            <Route path='/pages/NFTs' element={<NFTs/>} />
            <Route path='/pages/P2E' element={<P2E/>} />
            <Route path='/pages/Team' element={<Team/>} />
            <Route path='/pages/Support' element={<Support/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
