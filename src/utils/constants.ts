import {
  Bank,
  Barcode,
  CreditCard,
  Money,
  QrCode,
} from "phosphor-react-native";
import { Dimensions } from "react-native";

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get("screen");

export const PAYMENT_METHODS_MAP = [
  { id: "invoice", label: "Boleto", icon: Barcode },
  { id: "pix", label: "Pix", icon: QrCode },
  { id: "money", label: "Dinheiro", icon: Money },
  { id: "creditCard", label: "Cartão de crédito", icon: CreditCard },
  { id: "bankDeposit", label: "Depósito bancário", icon: Bank },
];
