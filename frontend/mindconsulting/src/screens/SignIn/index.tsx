import React from 'react';
import logoProfessor from '@assets/logoProfessor.png';
import {
  Container,
  ContainerLogo,
  ImageLogo,
  Text
} from './styles';
import { InputSignIn } from '@components/Input';

export function SignIn(){
   return (
     <Container>
      <ContainerLogo>
      <ImageLogo 
      source={logoProfessor}
      alt="Professor"
      resizeMode="contain"
      position="absolute"
      />
      </ContainerLogo>
      <Text>Acesse sua conta</Text>
      <InputSignIn/>
     </Container>
  );
}