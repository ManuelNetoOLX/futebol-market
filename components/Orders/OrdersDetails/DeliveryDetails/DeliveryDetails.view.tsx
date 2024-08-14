import { View, Text } from "react-native";
import { styles } from "./DeliveryDetails.styles";

interface Props {
  deliveryDetails: {
    code: string;
    address: string;
    shipping: string;
    dateShipping: string;
  };
}

export default function DeliveryDetailsView({ deliveryDetails }: Props) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.sectionName}>Detalhes da entrega</Text>
      <View style={styles.wrapperCard}>
        <View style={styles.row}>
          <Text>Data de envio</Text>
          <Text>{deliveryDetails.dateShipping}</Text>
        </View>
        <View style={styles.row}>
          <Text>Envio</Text>
          <Text>{deliveryDetails.shipping}</Text>
        </View>
        <View style={styles.row}>
          <Text>Código</Text>
          <Text>{deliveryDetails.code}</Text>
        </View>
        <View style={styles.row}>
          <Text>Endereço</Text>
          <Text>{deliveryDetails.address}</Text>
        </View>
      </View>
    </View>
  );
}
