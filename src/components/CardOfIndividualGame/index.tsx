import React, { useCallback, useEffect, useState } from 'react';
import {
  Container, MarkupGame,
  BoxNumberSelecteds, TextNumbers, TextData,
  TextNameOfGame, ButtonTrash
} from './styles';

import IconFont from 'react-native-vector-icons/FontAwesome';
import { IMainReducer } from '../../store/reducers';
import { useSelector } from 'react-redux';
interface CardOfIndividualGameProps {
  numbersSelecteds: string;
  price: string;
  date: string;
  type: string;
  hasIconTrash: boolean;
  onPress: () => void;
  color: string;
}

const CardOfIndividualGame: React.FC<CardOfIndividualGameProps> = ({
  numbersSelecteds, color, hasIconTrash, price, date, type, onPress
}) => {



  useEffect(() => {

  }, [numbersSelecteds])


  return (<>
    <Container>
      <MarkupGame style={{ backgroundColor: color }} />
      <BoxNumberSelecteds>
        <TextNumbers>{numbersSelecteds}</TextNumbers>
        <TextData>{`${date} - ${price}`}</TextData>

        {
          hasIconTrash
            ?
            <ButtonTrash onPress={onPress}>
              <IconFont name={'trash-o'} size={25} color={'black'}></IconFont>
            </ButtonTrash>
            : null
        }


        <TextNameOfGame>{type}</TextNameOfGame>

      </BoxNumberSelecteds>


    </Container>
  </>
  );
}

export default CardOfIndividualGame;
