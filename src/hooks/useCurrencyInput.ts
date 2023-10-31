import { formatCurrency } from "@utils/formatCurrency";
import { useState } from "react";

export function useCurrencyInput(): [string, (text: string) => void] {
  const [value, setValue] = useState("");
  function handleChange(value: string) {
    const decimal = Number(value.replace(/\D/g, "")) / 100;
    setValue(formatCurrency(decimal || 0).replace("R$\xa0", ""));
  }
  return [value, handleChange];
}
