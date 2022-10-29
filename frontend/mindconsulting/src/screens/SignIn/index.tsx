import React, { useState } from "react";
import logoProfessor from "@assets/logoProfessor.png";
import { InputSignIN } from "@components/Input";
import { Button } from "@components/Button";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { useAuth } from "../../Hooks/auth";

import {
  Container,
  ContainerLogo,
  ImageLogo,
  Text,
  ContainerText,
  ContainerButton,
  Title,
} from "./styles";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUser } = useAuth();
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleNewAccount() {
    navigation.navigate("SignUp");
  }

  async function handleSignIn() {
    const user = {
      email,
      password,
    };
    signUser(user);
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
        <ContainerLogo>
          <ImageLogo source={logoProfessor} resizeMode="contain" />
        </ContainerLogo>
        <ContainerText>
          <Text>Acesse sua conta</Text>
          <InputSignIN
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            style={{ marginTop: 30 }}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <InputSignIN
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Senha"
            secureTextEntry={true}
          />
        </ContainerText>
        <ContainerButton>
          <Button onPress={handleSignIn} title="Acessar" type="PRIMARY" />
          <Title>Ainda não tem acesso?</Title>
          <Button
            title="Criar conta"
            type="SECUNDARY"
            onPress={handleNewAccount}
          />
        </ContainerButton>
      </Container>
    </ScrollView>
  );
}
