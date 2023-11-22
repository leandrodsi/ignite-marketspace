import { useState } from "react";

export const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => setIsVisible(true);

  const closeModal = (beforeClose?: () => void) => {
    if (beforeClose) beforeClose();

    setIsVisible(false);
  };

  return { isVisible, openModal, closeModal };
};
