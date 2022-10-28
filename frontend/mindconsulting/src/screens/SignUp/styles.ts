import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray[700]};
`;
export const ContainerLogo = styled.View`
  width: 100%;
  height: 20%;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;
export const ImageLogo = styled.Image`
  width: 35%;
`;
export const ContainerText = styled.View`
  width: 100%;

  align-items: center;
  justify-content: center;
`;
export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.gray[100]};
  font-size: ${({ theme }) => theme.font_sizes.xl}px;
  font-family: ${({ theme }) => theme.font_family.regular};
  margin-top: 30px;
`;
export const ContainerButton = styled.View`
  height: 20%;
  align-items: center;

  margin-top: 20px;
`;
export const ContainerImage = styled.View`
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0;
`;

export const Image = styled.Image`
  width: 70%;
  height: 35%;
`;
