import { View } from "react-native";
import Options from "./Options/Options";

import { ValidPathname } from "@/constants/route";

export default function MenuOptions() {
  const options: { text: string; icon: string; pathname: ValidPathname }[] = [
    {
      text: "Cartao de crédito ou débito",
      icon: "card-outline",
      pathname: "/",
    },
    { text: "Paypal", icon: "wallet-outline", pathname: "/orders" },
    {
      text: "Transferência bancária",
      icon: "cash-outline",
      pathname: "/",
    },
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
