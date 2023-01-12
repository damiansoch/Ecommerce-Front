import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import AllItems from './Components/Items/AllItems';
import Menu from './Components/Menu/Menu';
import SellItem from './Components/Items/SellItem';
import ItemDetails from './Components/Items/ItemDetails';

import { ItemProvider } from './Context/ItemContext';

function App() {
  return (
    <div className="App">
      <ItemProvider>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="*" element={<Navigate to="/AllItems" replace />} />
            <Route path="/AllItems" element={<AllItems />} />
            <Route path="/SellItem" element={<SellItem />} />

            <Route path="/ItemDetails" element={<ItemDetails />} />
          </Routes>
        </BrowserRouter>
      </ItemProvider>
    </div>
  );
}

export default App;
