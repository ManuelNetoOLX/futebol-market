import { useEffect } from "react";
import { Link, router } from "expo-router";
import { StyleSheet, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { User } from "@/types/user.type";
import { Input } from "@/components/Shared";
import { useUserService } from "@/services/user/user.hook";

import { z } from "zod";
import { Formik, useFormik } from "formik";
import { toFormikValidate } from "zod-formik-adapter";

const FormSchema = z.object({
  name: z.string().min(3, "Nome precisa no mínimo de 3 caracteres"),
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "Precisa de 6 ou mais caracteres"),
  confirmPassword: z.string().min(6, "Precisa de 6 ou mais caracteres"),
});

type Form = z.infer<typeof FormSchema>;
export default function RegisterFormScreen() {
  const { addUser, getUsers, loading, error } = useUserService();

  const createUser = async (user: User) => {
    try {
      await addUser(user);
      router.push({ pathname: "/" });
    } catch (error) {
      console.error("An error occurred while creating the user:", error);
    }
  };

  const getAllUsers = async () => {
    try {
      const users = await getUsers();
    } catch (error) {
      console.error("An error occurred while fetching the users:", error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const submitForm = async (values: Form) => {
    const user: User = {
      id: 0,
      name: values.name,
      email: values.email,
      password: values.password,
      phoneNumber: "",
      address: {
        street: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
      },
      dateOfBirth: new Date(),
      registrationDate: new Date(),
    };

    if (user) {
      createUser(user);
    }
  };

  const { initialValues, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: submitForm,
  });

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/futebol-market.appspot.com/o/app%2Flogo_app.webp?alt=media&token=6f9cc963-4f6c-4eae-8c1a-3a29ed8277fc",
        }}
        style={styles.logo}
      />
      <Text style={styles.title}>Futebol Market</Text>
      {}

      <Formik
        initialValues={initialValues}
        onSubmit={submitForm}
        validate={toFormikValidate(FormSchema)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <>
            <Input
              iconName="person-outline"
              placeholder="Nome Completo"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
            />
            {errors.name && touched.name && (
              <Text style={styles.error}>{errors.name}</Text>
            )}

            <Input
              iconName="mail-outline"
              placeholder="E-mail"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              textContentType="emailAddress"
              autoComplete="email"
              autoCapitalize="none"
              value={values.email}
            />
            {errors.email && touched.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}

            <Input
              isPassword
              iconName="lock-closed-outline"
              placeholder="Senha"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            {errors.password && touched.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}

            <Input
              isPassword
              iconName="lock-closed-outline"
              placeholder="Senha (confirmar)"
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              value={values.confirmPassword}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <Text style={styles.error}>{errors.confirmPassword}</Text>
            )}

            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSubmit()}
              disabled={loading}
            >
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
      {error && <Text style={styles.error}>{error}</Text>}

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
