import { createContext, useState, useContext } from "react";

export const ShellContext = createContext({
  sideBarOpen: false,
  setSideBarOpen: () => {},
  url: "",
  setUrl: () => {},
});

export const ShellContextProvider = ({ children }) => {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [url, setUrl] = useState(false);

  const values = {
    sideBarOpen,
    setSideBarOpen,
    url,
    setUrl,
  };
  return (
    <ShellContext.Provider value={values}>{children}</ShellContext.Provider>
  );
};

export const useShellContext = () => useContext(ShellContext);
