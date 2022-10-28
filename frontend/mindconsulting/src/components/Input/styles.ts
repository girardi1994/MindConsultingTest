import styled from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled(TextInput)`

  width: 70%;
  height: 45px;

  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray[700]};
  font-family: ${({ theme }) => theme.font_family.regular};
  font-size: ${({ theme }) => theme.font_sizes.md}px;
  border-radius: 6px;
  padding: 4px;
  padding-left: 10px;
  margin-bottom: 4px;
`;