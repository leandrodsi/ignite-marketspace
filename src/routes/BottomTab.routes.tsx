import { useAuth } from "@hooks/useAuth";
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Home } from "@screens/Home";
import { MyProducts } from "@screens/MyProducts";
import { Center, Pressable, useTheme } from "native-base";
import { House, SignOut, Tag } from "phosphor-react-native";

export type AuthRoutesBottomTabProps = {
  home: undefined;
  "my-products": undefined;
  "sign-out": undefined;
};

export type AuthRoutesBottomTabsNavigatorProps =
  BottomTabNavigationProp<AuthRoutesBottomTabProps>;

const { Navigator, Screen, Group } =
  createBottomTabNavigator<AuthRoutesBottomTabProps>();

const SignOutButton = () => {
  const { colors } = useTheme();
  const { signOut } = useAuth();

  return (
    <Pressable w="1/3" onPress={signOut}>
      <Center flex={1}>
        <SignOut size={24} color={colors.red[500]} />
      </Center>
    </Pressable>
  );
};

export const BottomTabRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false, tabBarLabel: () => null }}>
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <House
              size={size}
              color={color}
              weight={focused ? "bold" : "regular"}
            />
          ),
        }}
      />
      <Screen
        name="my-products"
        component={MyProducts}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <Tag
              size={size}
              color={color}
              weight={focused ? "bold" : "regular"}
            />
          ),
        }}
      />
      <Screen
        name="sign-out"
        component={SignOutButton}
        options={{
          tabBarButton: () => <SignOutButton />,
        }}
      />
    </Navigator>
  );
};
