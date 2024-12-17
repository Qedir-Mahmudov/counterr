import { createContext, useContext } from "react";
import { useState } from "react";
 export const Counter = createContext();

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  function artim() {
    setCount((count) => count + 1);
  }
  function azaltma() {
    setCount((count) => count - 1);
  }
  return (
    <Counter.Provider value={{ count, artim, azaltma }}>
      {children}
    </Counter.Provider>
  );
}
