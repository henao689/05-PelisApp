/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {createContext} from 'react';

interface Colors {
  primary: string;
  secondary: string;
}

interface ContextProps {
  colors: Colors;
  prevColors: Colors;
  changeColors: (colors: Colors) => void;
  changePrevColors: (colors: Colors) => void;
}

export const GradientContext = createContext({} as ContextProps); //definir tipo

export const ProviderGradient = ({children}: any) => {
  const [colors, setColors] = useState<Colors>({
    primary: 'transparent',
    secondary: 'transparent',
  });
  const [prevColors, setPrevColors] = useState<Colors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const changeColors = (newColors: Colors) => {
    setColors(newColors);
  };
  const changePrevColors = (newColors: Colors) => {
    setPrevColors(newColors);
  };
  return (
    <GradientContext.Provider
      value={{colors, prevColors, changeColors, changePrevColors}}>
      {children}
    </GradientContext.Provider>
  );
};
