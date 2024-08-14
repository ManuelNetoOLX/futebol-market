import { View } from "react-native";
import ProductsList from "./ProductsList/ProductsList.container";
import PaymentDetails from "./PaymentDetails/PaymentDetails.container";
import DeliveryDetails from "./DeliveryDetails/DeliveryDetails.container";
import { styles } from "./OrdersDetails.styles";

export default function OrdersDetailsComponent() {
  return (
    <View style={styles.wrapper}>
      <ProductsList />
      <DeliveryDetails />
      <PaymentDetails />
    </View>
  );
}
