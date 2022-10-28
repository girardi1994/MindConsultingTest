import styled from "styled-components/native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECUNDARY";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled.TouchableOpacity`
  width: 70%;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-family: ${({ theme }) => theme.font_family.regular};
  font-size: ${({ theme }) => theme.font_sizes.md}px;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.colors.green[700] : theme.colors.gray[700]};
  border-color: ${({ theme }) => theme.colors.green[700]};
  border-width: 2px;
`;
export const Title = styled.Text`
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font_family.regular};
  font-size: ${({ theme }) => theme.font_sizes.md}px;
`;

