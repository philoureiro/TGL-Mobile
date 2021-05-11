import React, { useEffect, useCallback, useState, useMemo } from 'react';
import {
  Container, BoxButtonTypeOfGame, BoxAllGames,
  TextTitle, TextFilters, ScrollView, FlatList, SafeAreaView
} from './styles';
import ButtonTypeOfGame from '../../components/ButtonTypeOfGame';
import CustomHeader from '../../components/CustomHeader';
import CardOfIndividualGame from '../../components/CardOfIndividualGame';
import api from '../../services/api';
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Alert } from 'react-native';
import { IGameState } from '../../store/reducers';


interface MyBetsProps {
  navigation: any;
}

interface IGameProps {
  id: number,
  type: string,
  description: string,
  price: number,
  color: string,
  range: number,
  max_number: number,
  min_cart_value: number,
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

  useEffect(() => {
    console.log('=>front', gamesRedux.games)
  }, [gamesRedux.games])


  const renderItem = useCallback(({ item }) => {
    return (
      <ButtonTypeOfGame key={item.id} onPress={() => Alert.alert('oi')} colorButton={'#fff'}
        colorText={item.color} isMark={false} nameButton={item.type} >
      </ButtonTypeOfGame>
    )
  }, [gamesRedux.games]);


  return (
    <>
      <CustomHeader navigation={navigation} />
      <Container>

        <TextTitle>RECENT GAMES</TextTitle>
        <TextFilters>FIlters</TextFilters>

        <BoxButtonTypeOfGame>
          <FlatList
            data={gamesRedux.games}
            horizontal={true}
            keyExtractor={(item: any) => item.id}
            renderItem={renderItem}
          />
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

/**
 *
 *  horizontal={true} >
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
 *
 */