import React, { useCallback, useEffect, useState } from 'react';
import { Button, TextButton } from './styles';
import { useDispatch, useSelector } from 'react-redux';

interface ButtonTypeOfGameProps {
  colorButton: string;
  nameButton: string;
  colorText: string;
  isMark: boolean;
  onPress: () => void
}

interface infoOfGamesProps {
  types?: {};
}

const ButtonTypeOfGame: React.FC<ButtonTypeOfGameProps> = ({ onPress, colorButton, nameButton, colorText }) => {
  const [isMark, setIsMark] = useState(false);
  const [colorButtonCurrent, setcolorButtonCurrent] = useState(colorButton);
  const [colorTextButtonCurrent, setcolorTextButtonCurrent] = useState(colorText);
  const dispatch = useDispatch();


  const dataButton: any = useSelector(
    (state: { data_button_type_is_mark: '' }) => state.data_button_type_is_mark,
  );


  function handleClickButton() {

    setIsMark(!isMark);
    if (isMark) {

      setcolorTextButtonCurrent(colorText);
      setcolorButtonCurrent('#fff');
    } else {

      setcolorTextButtonCurrent('#fff');
      setcolorButtonCurrent(colorText);
    }
  }

  return (
    <Button style={{ backgroundColor: colorButtonCurrent, borderColor: colorText }} onPress={onPress}>
      <TextButton style={{ color: colorTextButtonCurrent }}>{nameButton}</TextButton>
    </Button>
  );
}

export default ButtonTypeOfGame;

