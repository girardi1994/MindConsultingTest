import React, { useState } from "react";
import logoProfessor from "@assets/logoProfessor.png";
import Professor from "@assets/Professor.png";
import { InputSignIN } from "@components/Input";
import { Button } from "@components/Button";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Container,
  ContainerLogo,
  ImageLogo,
  Text,
  ContainerText,
  ContainerButton,
  ContainerImage,
  Image,
} from "./styles";
import { useAuth } from "../../Hooks/auth";

export function SignUp() {
  const { signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleBackSignIN() {
    navigation.navigate("SignIn");
  }

  function handleSign() {
    const user = {
      name,
      email,
      password
    }
    signUp(user, () => navigation.navigate("SignIn"))
  }

  return (
    <>
      <Container>
        <ScrollView style={{ flex: 1 }}>
          <ContainerLogo>
            <ImageLogo source={logoProfessor} resizeMode="contain" />
          </ContainerLogo>
          <ContainerText>
            <Text>Crie sua conta</Text>
            <InputSignIN
              placeholder="Nome"
              style={{ marginTop: 30 }}
              value={name}
              onChangeText={(text) => setName(text)}
            />
            <InputSignIN
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <InputSignIN
              placeholder="Senha"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </ContainerText>
          <ContainerButton>
            <Button onPress={() => handleSign()} title="Criar e acessar" type="PRIMARY" />
            <Button
              title="Voltar para o login"
              type="SECUNDARY"
              style={{ marginTop: 20 }}
              onPress={handleBackSignIN}
            />
          </ContainerButton>
        </ScrollView>
      </Container>
      <ContainerImage>
        <Image source={Professor} />
      </ContainerImage>
    </>
  );
}
