import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AllItems from './Components/Items/AllItems';
import Menu from './Components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/AllItems" element={<AllItems />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
