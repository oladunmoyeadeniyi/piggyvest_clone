import { useStateContext } from "../../context";

export const FlexNaira = () => {
  const { flexNaira } = useStateContext();
  let amount = 0;

  for (let i = 0; i < flexNaira.length; i++) {
    amount += parseInt(flexNaira[i].amount);
  }

  return amount;
  //   // const amounts = flexNaira.map((transaction) => transaction.amount);
  //   // const total = amounts.reduce((a, z) => (a += z), 0).toFixed(2);
};

export const FlexDollar = () => {
  const { flexDollar } = useStateContext();
  let amount = 0;
  for (let i = 0; i < flexDollar.length; i++) {
    amount += parseInt(flexDollar[i].amount);
  }
  return amount;
};

export const Targets = () => {
  const { targets } = useStateContext();
  let amount = 0;
  for (let i = 0; i < targets.length; i++) {
    amount += parseInt(targets[i].amount);
  }
  return amount;
};

export const SafeLocks = () => {
  const { safeLock } = useStateContext();
  let amount = 0;
  for (let i = 0; i < safeLock.length; i++) {
    amount += parseInt(safeLock[i].amount);
  }
  return amount;
};

export const InvestifyTotal = () => {
  const { investify } = useStateContext();
  let amount = 0;
  for (let i = 0; i < investify.length; i++) {
    amount += parseInt(investify[i].amount);
  }
  return amount;
};

export const PiggyBank = () => {
  const { piggyBank } = useStateContext();
  let amount = 0;
  for (let i = 0; i < piggyBank.length; i++) {
    amount += parseInt(piggyBank[i].amount);
  }
  return amount;
};

export const TotalNairaBalance = () => {
  const balance = (
    FlexNaira() +
    PiggyBank() +
    SafeLocks() +
    InvestifyTotal() +
    Targets()
  ).toFixed(2);
  return balance.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
