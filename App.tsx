import { Loading } from "@components/Loading";
import {
  Karla_400Regular,
  Karla_700Bold,
  useFonts,
} from "@expo-google-fonts/karla";
import { RegisterProduct } from "@screens/RegisterProduct";
import { NativeBaseProvider } from "native-base";
import { THEME } from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Karla_400Regular,
    Karla_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      {fontsLoaded ? <RegisterProduct /> : <Loading />}
    </NativeBaseProvider>
  );
}
