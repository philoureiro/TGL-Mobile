import React from 'react';
import { Container } from './styles';
import IconAnt from 'react-native-vector-icons/AntDesign';

interface CardProps {
  children: object;
}

const Card: React.FC<CardProps> = (props) => {
  const { children } = props;
  return (
    <Container>
      { children}
    </Container>
  );
}

export default Card;
