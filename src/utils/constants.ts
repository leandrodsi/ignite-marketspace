import {
  Bank,
  Barcode,
  CreditCard,
  Money,
  QrCode,
} from "phosphor-react-native";

export const PAYMENT_METHODS = [
  { id: "invoice", label: "Boleto", icon: Barcode },
  { id: "pix", label: "Pix", icon: QrCode },
  { id: "money", label: "Dinheiro", icon: Money },
  { id: "creditCard", label: "Cartão de crédito", icon: CreditCard },
  { id: "bankDeposit", label: "Depósito bancário", icon: Bank },
];
