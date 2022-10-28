import React from "react";
import logoProfessor from "@assets/logoProfessor.png";
import Professor from "@assets/Professor.png";
import { InputSignIN } from "@components/Input";
import { Button } from "@components/Button";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
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

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleBackSignIN(){
    navigation.navigate("SignIn")
  }

  return (
    <>

    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
        <ContainerLogo>
          <ImageLogo
            source={logoProfessor}
            alt="Professor"
            resizeMode="contain"
            position="absolute"
          />
        </ContainerLogo>
        <ContainerText>
          <Text>Crie sua conta</Text>
          <InputSignIN placeholder="Nome" style={{ marginTop: 30 }} />
          <InputSignIN
            placeholder="E-mail"
            keyboardType="emai-address"
            autoCapitalize="none"
          />
          <InputSignIN placeholder="Senha" secureTextEntry={true} />
        </ContainerText>
        <ContainerButton>
          <Button title="Criar e acessar" type="PRIMARY" />

          <Button
            title="Voltar para o login"
            type="SECUNDARY"
            style={{ marginTop: 20 }}
            onPress={handleBackSignIN}
          />
        </ContainerButton>
      </Container>
    </ScrollView>
            <ContainerImage>
            <Image source={Professor} />
          </ContainerImage>
          </>  );
}
