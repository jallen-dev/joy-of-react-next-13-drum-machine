"use client";
import { createContext, useState } from "react";

export const SoundContext = createContext();

export function Sound({ children }) {
  const [soundEnabled, setSoundEnabled] = useState(true);

  return (
    <SoundContext.Provider value={{ soundEnabled, setSoundEnabled }}>
      {children}
    </SoundContext.Provider>
  );
}
