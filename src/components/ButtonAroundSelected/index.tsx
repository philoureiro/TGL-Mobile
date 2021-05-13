import React from 'react';
import { Container, TextButton, ButtonExit } from './styles';
import IconFeather from 'react-native-vector-icons/Feather';

interface ButtonAroundSelectedProps {
  numberButton: number;
  isSelected: boolean;
  color: string;
  onPress: () => void;
}

const ButtonAroundSelected: React.FC<ButtonAroundSelectedProps> = ({ numberButton, color, isSelected, onPress }) => {

  return (
    <Container style={{ backgroundColor: isSelected ? color : '#fff' }} >
      <ButtonExit onPress={onPress}>
        <IconFeather name={'x-circle'} color={'white'} size={17}></IconFeather>
      </ButtonExit>
      <TextButton>{numberButton}</TextButton>
    </Container>
  );
}

export default ButtonAroundSelected;
