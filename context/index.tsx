import React, { createContext, useState, useContext } from "react";

type ChildrenProp = {
  children: React.ReactNode;
};

type save = { amount: number; summary: string; time: string }[];

const initialState = {
  piggyBank: [
    { amount: 100000, summary: "", time: "" },
    { amount: -500, summary: "", time: "" },
  ],
  safeLock: [
    { amount: 100000, summary: "", time: "" },
    { amount: -500, summary: "", time: "" },
  ],
  investify: [
    { amount: 1000000, summary: "", time: "" },
    { amount: 1000000, summary: "", time: "" },
    { amount: 1000000, summary: "", time: "" },
    { amount: 1000000, summary: "", time: "" },
    { amount: -500, summary: "", time: "" },
  ],
  flexNaira: [
    { amount: 10, summary: "", time: "" },
    { amount: -500, summary: "", time: "" },
  ],
  flexDollar: [
    { amount: 100000, summary: "", time: "" },
    { amount: -500, summary: "", time: "" },
  ],
  targets: [
    { amount: 100000, summary: "", time: "" },
    { amount: -500, summary: "", time: "" },
  ],
};

export const StateContext = createContext<any>(initialState);

export const ContextProvider = ({ children }: ChildrenProp) => {
  const [flexNaira, setFlexNaira] = useState<save>(initialState.flexNaira);
  const [flexDollar, setFlexDollar] = useState<save>(initialState.flexDollar);
  const [targets, setTargets] = useState<save>(initialState.targets);
  const [piggyBank, setPiggyBank] = useState<save>(initialState.piggyBank);
  const [safeLock, setSafeLock] = useState<save>(initialState.safeLock);
  const [investify, setInvestify] = useState<save>(initialState.investify);

  return (
    <StateContext.Provider
      value={{
        flexNaira,
        setFlexNaira,
        flexDollar,
        setFlexDollar,
        targets,
        setTargets,
        piggyBank,
        setPiggyBank,
        safeLock,
        setSafeLock,
        investify,
        setInvestify,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
