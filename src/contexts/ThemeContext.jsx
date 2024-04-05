import React, { createContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ThemeContext.Provider;

export default ThemeContext;
