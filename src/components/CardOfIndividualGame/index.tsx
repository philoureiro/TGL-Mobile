import React from 'react';
import {
  Container, MarkupGame,
  BoxNumberSelecteds, TextNumbers, TextData,
  TextNameOfGame, ButtonTrash
} from './styles';

import IconFont from 'react-native-vector-icons/FontAwesome';

interface CardOfIndividualGameProps {
  hasIcon?: {
    nameIcon: string;
    colorIcon: string;
    sizeIcon: number;
  }
}

const CardOfIndividualGame: React.FC<CardOfIndividualGameProps> = ({ hasIcon }) => {


  return (<>
    <Container>
      <MarkupGame />
      <BoxNumberSelecteds>
        <TextNumbers> 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20</TextNumbers>
        <TextData> 28/11/2020 - R$02,50</TextData>

        {hasIcon ? <ButtonTrash>
          <IconFont name={hasIcon.nameIcon} size={hasIcon.sizeIcon} color={hasIcon.colorIcon}></IconFont>
        </ButtonTrash> : null}

        <TextNameOfGame>Lotomania</TextNameOfGame>

      </BoxNumberSelecteds>


    </Container>
  </>
  );
}

export default CardOfIndividualGame;
