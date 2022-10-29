import React from "react";
import Constants from "expo-constants";
const StatusHeght = Constants.statusBarHeight;
import { Container, Hello, Content, UserName, Loggout } from "./styles";
import { AntDesign, Feather } from "@expo/vector-icons";
import theme from "../../../../theme";
import { useAuth } from "../../../../Hooks/auth";

export const Header = () => {
  const { user, signOut } = useAuth();
  return (
    <Container style={{ paddingTop: StatusHeght }}>
      <AntDesign name="user" size={30} color={theme.colors.green[700]} />
      <Content>
        <Hello>Olá professor,</Hello>
        <UserName>{user?.name}</UserName>
      </Content>
      <Loggout onPress={signOut}>
        <Feather name="log-out" size={30} color={theme.colors.red[500]} />
      </Loggout>
    </Container>
  );
};
