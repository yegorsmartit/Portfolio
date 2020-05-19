import React, {createContext, useState} from 'react';

export const ThemesStatus = createContext([{}, ()=>{}]);

export const ThemesStatusProvider = ( {children} )=>{
  const [state, setState] = useState({
    cardThemePostal: true,
    cardThemeParalax: false,
    citeDarkTheme: true,
    citeLightTheme: false,
    citeEnglishTheme: true,
    citeRussianTheme: false
  });
  return (
    <ThemesStatus.Provider value={ [state, setState] }>{ children }</ThemesStatus.Provider>
  )
};

