import { api } from "@services/api";
import { formatErrorMessage } from "@utils/common";
import { AxiosRequestConfig } from "axios";
import { useToast } from "native-base";
import { SetStateAction, useState } from "react";

export const useServices = () => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const request = async <T>({
    method,
    url,
    config,
    setter,
    errorMessage,
  }: {
    method: "get" | "post" | "patch" | "delete";
    url: string;
    errorMessage: string;
    config?: AxiosRequestConfig;
    setter?: React.Dispatch<SetStateAction<T>>;
  }) => {
    try {
      setIsLoading(true);

      const { data } = await api[method](url, config);

      !!setter && setter(data);
    } catch (error) {
      const title = formatErrorMessage(error, errorMessage);

      toast.show({
        title,
        placement: "top",
        bgColor: "red.500",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, request };
};
