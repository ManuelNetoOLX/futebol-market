import { Input } from "@/components/Shared";
import { Link, router } from "expo-router";
import { Formik } from "formik";
import { useCallback, useMemo } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { z } from "zod";
import { toFormikValidate } from "zod-formik-adapter";

const FormSchema = z
  .object({
    name: z.string().min(3, "Nome precisa no mínimo de 3 caracteres"),
    email: z.string().email("E-mail inválido"),
    password: z.string().min(6, "Precisa de 6 ou mais caracteres"),
    confirmPassword: z.string().min(6, "As senhas devem coincidir"),
  })
  .refine(({ password, confirmPassword }) => password == confirmPassword);

type Form = z.infer<typeof FormSchema>;
export default function RegisterFormScreen() {
  const initialValues = useMemo(
    () => ({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    }),
    []
  );

  const onSubmit = useCallback((values: Form) => {
    console.log(values);

    router.push("(tabs)");
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo-frutopia.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Nebula Nectar</Text>

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
              iconName="person-outline"
              placeholder="Nome Completo"
              onBlur={handleBlur("name")}
              onChangeText={handleChange("name")}
              value={values.name}
            />
            {errors.name && touched.name && (
              <Text style={styles.error}>{errors.name}</Text>
            )}

            <Input
              iconName="mail-outline"
              placeholder="E-mail"
              textContentType="emailAddress"
              autoComplete="email"
              autoCapitalize="none"
              onBlur={handleBlur("email")}
              onChangeText={handleChange("email")}
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
              value={values.password}
            />
            {errors.password && touched.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}

            <Input
              isPassword
              iconName="lock-closed-outline"
              placeholder="Senha (confirmar)"
              onBlur={handleBlur("confirmPassword")}
              onChangeText={handleChange("confirmPassword")}
              value={values.confirmPassword}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <Text style={styles.error}>{errors.confirmPassword}</Text>
            )}

            <TouchableOpacity
              style={styles.button}
              disabled={!(isValid && dirty)}
              onPress={() => handleSubmit()}
            >
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>

      <Text style={styles.text}>
        Já tem conta?{" "}
        <Link style={styles.signIn} href="/">
          Faça o login
        </Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 8,
    backgroundColor: "#fff",
  },
  logo: {
    width: 72,
    height: 72,
    marginBottom: 16,
    alignSelf: "center",
  },
  title: {
    fontSize: 16,
    marginBottom: 64,
    alignSelf: "center",
    fontFamily: "PoppinsBold",
  },
  button: {
    backgroundColor: "#2E7D32",
    borderRadius: 5,
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
  },
  signIn: {
    color: "#2E7D32",
    fontFamily: "PoppinsBold",
  },
  error: {
    color: "#CC31A3",
    fontFamily: "PoppinsBold",
    fontSize: 12,
    paddingBottom: 8,
  },
});
