import React, { useContext } from "react";
import { useNewsQuery } from "../api/getNews";
import { NewsItem } from "../types/index";

type ContextValue = {
  items: NewsItem[];
  isLoading: boolean;
  isError: boolean;
};

type Props = {
  children: React.ReactNode;
};

const initValue: ContextValue = {
  items: [],
  isLoading: false,
  isError: false,
};

const Context = React.createContext<ContextValue>(initValue);

export const NewsDataProvider = ({ children }: Props) => {
  const { isLoading, isError, data } = useNewsQuery({});
  const value: ContextValue = {
    items: data || [],
    isLoading,
    isError,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useNewsData = () => useContext(Context);
