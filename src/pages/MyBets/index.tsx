import React, { useEffect, useCallback, useState, useMemo } from 'react';
import {
  Container, BoxButtonTypeOfGame, BoxAllGames,
  TextTitle, TextFilters, ScrollView
} from './styles';
import ButtonTypeOfGame from '../../components/ButtonTypeOfGame';
import CustomHeader from '../../components/CustomHeader';
import CardOfIndividualGame from '../../components/CardOfIndividualGame';
import api from '../../services/api';
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Alert } from 'react-native';


interface MyBetsProps {
  navigation: any;
}


interface infoOfGamesProps {
  types: [{
    type: string,
    description: string;
    range: number,
    price: number,
    'max-number': number,
    color: string,
    'min-cart-value': number,
  }]
}

const MyBets: React.FC<MyBetsProps> = ({ navigation }) => {

  const userRedux = useSelector((state: RootState) => state.userReducer);
  const gamesRedux = useSelector((state: RootState) => state.gameReducer);
  const [loading, setLoading] = useState(false);

  console.log(gamesRedux.games)

  useEffect(() => {
    console.log('=>front', gamesRedux.games.lenght)
  }, [gamesRedux])

  return (
    <>
      <CustomHeader navigation={navigation} />
      <Container>

        <TextTitle>RECENT GAMES</TextTitle>
        <TextFilters>FIlters</TextFilters>


        <BoxButtonTypeOfGame>
          <ScrollView horizontal={true} >
            {
              gamesRedux.games.map((button: any, index: number) => {
                console.log('=>entrou')
                return (
                  <ButtonTypeOfGame key={index + 1} onPress={() => Alert.alert('oi')} colorButton={'#fff'}
                    colorText={button.color} isMark={false} nameButton={button.type} >
                  </ButtonTypeOfGame>
                )
              })
            }
          </ScrollView>
        </BoxButtonTypeOfGame>

        <BoxAllGames>
          <ScrollView>
            <CardOfIndividualGame />
            <CardOfIndividualGame />
            <CardOfIndividualGame />
            <CardOfIndividualGame />
            <CardOfIndividualGame />
            <CardOfIndividualGame />
          </ScrollView>
        </BoxAllGames>

      </Container>
    </>
  );
}

export default MyBets;
