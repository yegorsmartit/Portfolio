import React, { createContext, useState } from 'react';

export const MenuStatusContext = createContext([{}, ()=>{}]);

export const MenuStatusProvider = ({children}) => {
  const [state, setState] = useState({
    menuStatus: false,

  });
  return (
    <MenuStatusContext.Provider value ={ [ state, setState ] }> {children}</MenuStatusContext.Provider>
  )
};
