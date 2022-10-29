import React from "react";
import Constants from "expo-constants";
const StatusHeght = Constants.statusBarHeight;
import { Container, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { IHeader } from "./types";
import { TouchableOpacity, View } from "react-native";
import theme from "../../theme";

export const Header = ({ onPress, title }: IHeader) => {
  const { goBack } = useNavigation();

  return (
    <Container style={{ paddingTop: StatusHeght }}>
      <TouchableOpacity onPress={() => goBack()}>
        <AntDesign name="arrowleft" size={24} color={theme.colors.white} />
      </TouchableOpacity>
      <Title>{title}</Title>
      {onPress ? (
        <TouchableOpacity onPress={() => onPress()}>
          <AntDesign name="delete" size={24} color={theme.colors.red[500]} />
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </Container>
  );
};
