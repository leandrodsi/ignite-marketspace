import { ProductDTO } from "@dtos/ProductDTO";
import { RouteProp } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { MyProductDetails } from "@screens/MyProductDetails";
import { ProductDetails } from "@screens/ProductDetails";
import { ProductPreview } from "@screens/ProductPreview";
import { RegisterProduct } from "@screens/RegisterProduct";
import { BottomTabRoutes } from "./BottomTab.routes";

export type AuthStackRoutesProps = {
  home: undefined;

  "register-product": undefined;
  "my-product-details": undefined;
  "product-details": undefined;
  "product-preview": { product: ProductDTO };
};

export type AuthStackScreenProps<T extends keyof AuthStackRoutesProps> =
  RouteProp<AuthStackRoutesProps, T>;

export type AuthStackRoutesNavigatorProps =
  NativeStackNavigationProp<AuthStackRoutesProps>;

const { Navigator, Screen } =
  createNativeStackNavigator<AuthStackRoutesProps>();

export const StackRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={BottomTabRoutes} />
      <Screen name="register-product" component={RegisterProduct} />
      <Screen name="my-product-details" component={MyProductDetails} />
      <Screen name="product-details" component={ProductDetails} />
      <Screen name="product-preview" component={ProductPreview} />
    </Navigator>
  );
};
