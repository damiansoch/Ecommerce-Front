import { createContext, useState } from 'react';

const ItemContext = createContext();

export function ItemProvider({ children }) {
  //setting from local storage
  let itemIdFromStorage = localStorage.getItem('itemId');
  itemIdFromStorage = JSON.parse(itemIdFromStorage);

  let itemFromStorage = localStorage.getItem('item');
  itemFromStorage = JSON.parse(itemFromStorage);

  const [itemId, setItemId] = useState(itemIdFromStorage);

  const [item, setItem] = useState(itemFromStorage);

  //--------------------------
  return (
    <ItemContext.Provider value={{ itemId, setItemId, item, setItem }}>
      {children}
    </ItemContext.Provider>
  );
}

export default ItemContext;
