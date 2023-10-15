import { createContext, useState } from "react";

const initialState = {
  showMenu: true,
};

export const GameContext = createContext(initialState);

// eslint-disable-next-line react/prop-types
export const GameContextProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(initialState.showMenu);

  return (
    <GameContext.Provider value={{ showMenu, setShowMenu }}>
      {children}
    </GameContext.Provider>
  );
};
