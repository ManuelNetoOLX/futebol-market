import { View } from "react-native";
import { styles } from "./ListCards.styles";
import AddressCard from "../AddressCard/AddressCard";

export default function ListCards() {
  const listCards = [
    {
      title: "Priscekila",
      address:
        "3711 Spring Hill Rd undefined Tallahassee, Nevada 52874 United States",
      phone: "+99 1234567890",
    },
    {
      title: "Ahmad Khaidir",
      address:
        "3711 Spring Hill Rd undefined Tallahassee, Nevada 52874 United States",
      phone: "+99 1234567890",
    },
  ];

  return (
    <View style={styles.wrapper}>
      {listCards.map((card, index) => (
        <AddressCard
          key={index}
          title={card.title}
          address={card.address}
          phone={card.phone}
        />
      ))}
    </View>
  );
}
