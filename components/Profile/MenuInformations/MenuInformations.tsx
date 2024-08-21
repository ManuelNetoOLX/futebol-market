import { View } from "react-native";
import Information from "./Information/Information";

export default function MenuInformation() {
  const options: { text: string; icon: string; information: string }[] = [
    { text: "Gênero", icon: "female", information: "Masculino" },
    {
      text: "Data de Aniversario",
      icon: "calendar-outline",
      information: "25-02-1996",
    },
    { text: "Email", icon: "mail-outline", information: "manuel.neto@cwi.com" },
    { text: "Telefone", icon: "call-outline", information: "(51) 99999-9999" },
  ];

  return (
    <View>
      {options.map((option, index) => (
        <Information
          key={index}
          textLabel={option.text}
          icon={option.icon}
          information={option.information}
        />
      ))}
    </View>
  );
}
