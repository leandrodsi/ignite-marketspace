import { Loading } from "@components/Loading";
import { AuthContextProvider } from "@contexts/AuthContext";
import {
  Karla_400Regular,
  Karla_700Bold,
  useFonts,
} from "@expo-google-fonts/karla";
import { Routes } from "@routes/index";
import { NativeBaseProvider } from "native-base";
import { THEME } from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Karla_400Regular,
    Karla_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}
