import { useCallback, useMemo } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Link, router } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

import { z } from "zod";
import { Formik } from "formik";
import { toFormikValidate } from "zod-formik-adapter";

import { Input } from "@/components/Shared";

const FormSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "Oops! Senha incorreta"),
});

type Form = z.infer<typeof FormSchema>;

export default function LoginFormScreen() {
  const initialValues = useMemo(
    () => ({
      email: "",
      password: "",
    }),
    []
  );

  const onSubmit = useCallback((values: Form) => {
    router.push("/(tabs)");
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/futebol-market.appspot.com/o/app%2Flogo_app.webp?alt=media&token=6f9cc963-4f6c-4eae-8c1a-3a29ed8277fc",
        }}
        style={styles.logo}
      />
      <Text style={styles.title}>Futebol Market</Text>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={toFormikValidate(FormSchema)}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
          isValid,
          dirty,
        }) => (
          <>
            <Input
              iconName="mail-outline"
              placeholder="E-mail"
              textContentType="emailAddress"
              autoComplete="email"
              autoCapitalize="none"
              onBlur={handleBlur("email")}
              onChangeText={handleChange("email")}
              hasError={errors.hasOwnProperty("email")}
              value={values.email}
            />
            {errors.email && touched.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}

            <Input
              isPassword
              iconName="lock-closed-outline"
              placeholder="Senha"
              onBlur={handleBlur("password")}
              onChangeText={handleChange("password")}
              hasError={errors.hasOwnProperty("password")}
              value={values.password}
            />
            {errors.password && touched.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}

            <TouchableOpacity
              style={styles.button}
              disabled={!(isValid && dirty)}
              onPress={() => handleSubmit()}
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            <Text style={styles.text}>
              Não possui conta?{" "}
              <Link style={styles.signUp} href="/register">
                Faça o registro
              </Link>
              <Link href="/products"> Produtos </Link>
            </Text>
          </>
        )}
      </Formik>

      <View style={styles.divider}>
        <View style={styles.dividerRules} />
        <Text style={styles.dividerText}>OU</Text>
        <View style={styles.dividerRules} />
      </View>

      <View style={styles.ssoButtons}>
        <TouchableOpacity style={styles.ssoButton}>
          <FontAwesome name="google" size={24} color="black" />
          <Text style={styles.ssoButtonText}>Login with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.ssoButton}>
          <FontAwesome name="facebook" size={24} color="black" />
          <Text style={styles.ssoButtonText}>Login with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
    backgroundColor: "#fff",
  },
  logo: {
    width: 172,
    height: 172,
    marginBottom: 16,
    alignSelf: "center",
  },
  title: {
    fontSize: 16,
    marginBottom: 64,
    alignSelf: "center",
    fontFamily: "PoppinsBold",
    color: "#2A2210",
  },
  error: {
    color: "#B60123",
    fontFamily: "PoppinsBold",
    fontSize: 12,
    paddingBottom: 8,
    alignSelf: "flex-start",
  },
  button: {
    backgroundColor: "#2E7D32",
    borderRadius: 5,
    width: "100%",
    height: 57,
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    marginBottom: 16,
    marginTop: 16,
    fontFamily: "Poppins",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#fff",
    fontFamily: "PoppinsBold",
  },
  text: {
    alignSelf: "center",
    fontFamily: "Poppins",
    marginBottom: 8,
  },
  signUp: {
    color: "#2E7D32",
    fontFamily: "PoppinsBold",
  },
  ssoButtons: {
    width: "100%",
    gap: 8,
    marginTop: 16,
  },
  ssoButton: {
    borderColor: "#2E7D32",
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 20,
    width: "100%",
    height: 57,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: "#2E7D32",
    fontFamily: "Poppins",
  },
  ssoButtonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#2E7D32",
    fontFamily: "PoppinsBold",
    textAlign: "center",
    flex: 1,
  },
  divider: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 23,
  },
  dividerRules: {
    flex: 1,
    borderBottomColor: "#2A2210",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  dividerText: {
    fontSize: 14,
    lineHeight: 21,
    fontFamily: "PoppinsBold",
    color: "#2A2210",
  },
});
