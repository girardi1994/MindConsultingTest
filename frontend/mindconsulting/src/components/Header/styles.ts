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


export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_sizes.md}px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;

