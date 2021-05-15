import React from 'react';
import {
  Container, MarkupGame,
  BoxNumberSelecteds, TextNumbers, TextData,
  TextNameOfGame, ButtonTrash
} from './styles';

import IconFont from 'react-native-vector-icons/FontAwesome';
interface CardOfIndividualGameProps {
  numbersSelecteds: number[];
  color: string;
  price: number;
  date: string;
  type: string;
  onPress: () => void
}

const CardOfIndividualGame: React.FC<CardOfIndividualGameProps> = ({ numbersSelecteds, color, price, date, type, onPress }) => {


  return (<>
    <Container>
      <MarkupGame style={{ backgroundColor: color }} />
      <BoxNumberSelecteds>
        <TextNumbers>{JSON.stringify(numbersSelecteds)}</TextNumbers>
        <TextData>{`${date} - ${price}`}</TextData>

        <ButtonTrash onPress={onPress}>
          <IconFont name={'trash-o'} size={25} color={'black'}></IconFont>
        </ButtonTrash>

        <TextNameOfGame>{type}</TextNameOfGame>

      </BoxNumberSelecteds>


    </Container>
  </>
  );
}

export default CardOfIndividualGame;
