import { View, Text, Image } from "react-native";

import { styles } from "./PaymentDetails.styles";

interface Props {
  paymentDetails: {
    items: number;
    shipping: number;
    importCharges: number;
    totalPrice: number;
  };
}

export default function PaymentDetailsView({ paymentDetails }: Props) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.sectionName}>Detalhes de pagamento</Text>
      <View style={styles.wrapperCard}>
        <View style={styles.row}>
          <Text>Items</Text>
          <Text>R$ {paymentDetails.items}</Text>
        </View>
        <View style={styles.row}>
          <Text>Frete</Text>
          <Text>R$ {paymentDetails.shipping}</Text>
        </View>
        <View style={styles.row}>
          <Text>Taxas</Text>
          <Text>R$ {paymentDetails.importCharges}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.row}>
          <Text>Valor total</Text>
          <Text style={styles.priceText}>R$ {paymentDetails.totalPrice}</Text>
        </View>
      </View>
    </View>
  );
}
