import styled from "styled-components/native";

export const Container = styled.View`
  height: 150px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray[600]};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Content = styled.View`
  width: 100%;
  flex: 1;
  margin-left: 20px;
  height: 50px;
  justify-content: space-between;
`;

export const Hello = styled.Text`
  font-size: ${({ theme }) => theme.font_sizes.sm}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const UserName = styled.Text`
  font-size: ${({ theme }) => theme.font_sizes.md}px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
`;

export const Loggout = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;
