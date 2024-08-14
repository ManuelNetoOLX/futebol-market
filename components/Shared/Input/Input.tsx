import { useCallback, useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TextInput, View } from "react-native";
import { styles } from "./Input.styles";

interface InputProps extends React.ComponentProps<typeof TextInput> {
  iconName: keyof typeof Ionicons.glyphMap;
  placeholder: string;
  isPassword?: boolean;
  hasError?: boolean;
}

export default function Input({
  iconName,
  placeholder,
  isPassword = false,
  hasError,
  ...props
}: InputProps) {
  const inputElement = useRef<any>(null);

  const [isFocused, setIsFocused] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <View
      style={[
        styles.inputContainer,
        isFocused && styles.inputContainerFocused,
        hasError && styles.inputContainerError,
      ]}
    >
      <Ionicons
        name={iconName}
        style={[
          styles.icon,
          isFocused && styles.iconFocused,
          hasError && styles.error,
        ]}
        size={20}
      />

      <TextInput
        ref={inputElement}
        style={[styles.textInput]}
        placeholder={placeholder}
        placeholderTextColor="#E0E0E0"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        secureTextEntry={isPassword}
        {...props}
      />
    </View>
  );
}
