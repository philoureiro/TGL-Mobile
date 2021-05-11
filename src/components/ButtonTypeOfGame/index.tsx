import React, { useCallback, useEffect, useState } from 'react';
import { Button, TextButton } from './styles';
import { useDispatch, useSelector } from 'react-redux';

interface ButtonTypeOfGameProps {
  colorButton: string;
  nameButton: string;
  colorText: string;
  isSelected: boolean;
  onPress: () => void
}

interface infoOfGamesProps {
  types?: {};
}

const ButtonTypeOfGame: React.FC<ButtonTypeOfGameProps> = ({ onPress, colorButton, nameButton, colorText, isSelected }) => {
  const [isMark, setIsMark] = useState(false);
  const dispatch = useDispatch();


  const dataButton: any = useSelector(
    (state: { data_button_type_is_mark: '' }) => state.data_button_type_is_mark,
  );

  return (
    <Button style={{ backgroundColor: isSelected ? colorButton : '#fff', borderColor: colorButton }} onPress={onPress}>
      <TextButton style={{ color: isSelected ? '#fff' : colorText }}>{nameButton}</TextButton>
    </Button>
  );
}

export default ButtonTypeOfGame;

