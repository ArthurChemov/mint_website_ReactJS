import { useState } from 'react';
import './App.css';
import NavBar from './assets/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Coin from './assets/pages/Coin';
import NFTs from './assets/pages/NFTs';
import P2E from './assets/pages/P2E';
import Home from './assets/pages/Home';
import Team from './assets/pages/Team';
import Support from './assets/pages/Support';

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="moving-background">
      <div className="App">
        <BrowserRouter>
          <NavBar accounts = {accounts} setAccounts = {setAccounts} />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/assets/pages/Coin' element={<Coin accounts = {accounts} setAccounts = {setAccounts}/>} />
            <Route path='/assets/pages/NFTs' element={<NFTs/>} />
            <Route path='/assets/pages/P2E' element={<P2E/>} />
            <Route path='/assets/pages/Team' element={<Team/>} />
            <Route path='/assets/pages/Support' element={<Support/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
