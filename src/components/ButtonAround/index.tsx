import React from 'react';
import { Button, TextButton } from './styles';

interface ButtonAroundProps {
  numberButton: number;
  isSelected: boolean;
  color: string;
  onPress: () => void;
}

const ButtonAround: React.FC<ButtonAroundProps> = ({ numberButton, color, isSelected, onPress }) => {

  return (
    <Button style={{ backgroundColor: isSelected ? color : '#fff' }} onPress={onPress}>
      <TextButton>{numberButton}</TextButton>
    </Button>
  );
}

export default ButtonAround;
