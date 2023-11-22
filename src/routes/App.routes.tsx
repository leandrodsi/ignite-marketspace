import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";

type AppRoutesStackProps = {
  "sign-in": undefined;
  "sign-up": undefined;
};

export type AppRoutesStackNavigatorProps =
  NativeStackNavigationProp<AppRoutesStackProps>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutesStackProps>();

export const AppRoutes = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="sign-in" component={SignIn} />
    <Screen name="sign-up" component={SignUp} />
  </Navigator>
);
