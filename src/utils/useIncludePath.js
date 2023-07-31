import { useLocation } from "react-router-dom";

export const useIncludesPath = (path) => {
  const location = useLocation();
  return location.pathname.includes(path);
};

export const useIsPath = (path) => {
  const location = useLocation();
  return location.pathname === path;
};
