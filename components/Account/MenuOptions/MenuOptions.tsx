import { View } from "react-native";
import Options from "./Options/Options";

import { ValidPathname } from "@/constants/route";

export default function MenuOptions() {
  const options: { text: string; icon: string; pathname: ValidPathname }[] = [
    { text: "Perfil", icon: "person-outline", pathname: "/profile" },
    { text: "Pedidos", icon: "bag-outline", pathname: "/orders" },
    { text: "Endereço", icon: "location-outline", pathname: "/address" },
    { text: "Formas de pagamento", icon: "card-outline", pathname: "/profile" },
  ];

  return (
    <View>
      {options.map((option, index) => (
        <Options
          key={index}
          text={option.text}
          icon={option.icon}
          pathname={option.pathname}
        />
      ))}
    </View>
  );
}
