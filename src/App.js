import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import AllItems from './Components/Items/AllItems';
import Menu from './Components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="*" element={<Navigate to="/AllItems" replace />} />
          <Route path="/AllItems" element={<AllItems />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
