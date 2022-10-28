import styled from "styled-components/native";
import theme from "src/theme/index";

export const Container = styled.View`
  flex: 1;
  background-color: black;
`;
export const ContainerLogo = styled.View`
  width: 100%;
  height: 30%;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
export const ImageLogo = styled.Image`
  width: 35%;
`;

export const Text = styled.Text`
color: ${({theme})=> theme.colors.100};
font-size: ${({theme})=> theme.font_size.XL}px;
font-family: ${({theme})=> theme.font_family.regular};
`;
