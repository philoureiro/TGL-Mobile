import React from 'react';
import { Button, TextButton } from './styles';

interface ButtonAroundProps {

}

const ButtonAround: React.FC<ButtonAroundProps> = () => {

  return (
    <Button>
      <TextButton>01</TextButton>
    </Button>
  );
}

export default ButtonAround;
