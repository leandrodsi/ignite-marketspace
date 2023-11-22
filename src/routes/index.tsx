import { useAuth } from "@hooks/useAuth";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./App.routes";
import { StackRoutes } from "./Stack.routes";

type User = { id: string; name: string };

export const Routes = () => {
  const { user, isLoadingUserStorageData } = useAuth();

  console.log("USEEEEER: ", user);

  return (
    <NavigationContainer>
      {user?.id ? <StackRoutes /> : <AppRoutes />}
    </NavigationContainer>
  );
};
