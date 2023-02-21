import React, { useContext } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import { ScreenThresholds } from "../constants";

type ContextValue = {
  isSmallScreen: boolean;
};

type Props = {
  children: React.ReactNode;
};

const initValue: ContextValue = {
  isSmallScreen: false,
};

const Context = React.createContext<ContextValue>(initValue);

export const ConfigProvider = ({ children }: Props) => {
  const { width } = useWindowSize();
  const value: ContextValue = {
    isSmallScreen: width < ScreenThresholds.MOBILE,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useConfig = () => useContext(Context);
