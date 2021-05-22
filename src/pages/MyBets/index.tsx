import React, { useEffect, useCallback, useState, useMemo } from 'react';
import {
  Container, BoxButtonTypeOfGame, BoxAllGames, ActivityIndicator,
  TextTitle, TextFilters, ScrollView, FlatList, SafeAreaView
} from './styles';
import ButtonTypeOfGame from '../../components/ButtonTypeOfGame';
import CustomHeader from '../../components/CustomHeader';
import CardOfIndividualGame from '../../components/CardOfIndividualGame';
import api from '../../services/api';
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Alert } from 'react-native';
import { IGameState, IMainReducer } from '../../store/reducers';
import { color, set } from 'react-native-reanimated';


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

  const userRedux = useSelector((state: IMainReducer) => state.userReducer);
  const gamesRedux = useSelector((state: IMainReducer) => state.gameReducer);
  const [loading, setLoading] = useState(false);

  const [games, setGames] = useState(gamesRedux.games);
  const [gamesSelecteds, setGamesSelecteds] = useState<IGameProps[]>([]);
  const [betsOfUserOnTheApi, SetBetsOfUserOnTheApi] = useState([]);

  useEffect(() => {
    setLoading(true);

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userRedux.user.token.token}`
      }
    }

    let filter = [];
    try {
      async function loadingDataOnTheAPI() {
        filter = gamesSelecteds.map((game) => {
          return (game.type);
        })
        await api.post('/bets/filter', { filter: filter }, config).then(response => {
          //console.log('=>', response.data)
          SetBetsOfUserOnTheApi(response.data)
          setLoading(false);
          // });
        })
      }

      loadingDataOnTheAPI();

    } catch (error) {
      setLoading(false);
      console.log('=>error', error)
      Alert.alert('Erro ao buscar dados na api.')

    }
  }, [gamesSelecteds, gamesRedux.games])

  const handleClickTypeGame = useCallback((game) => {
    if (gamesSelecteds.length > 0) {

      gamesSelecteds.includes(game)
        ? setGamesSelecteds(gamesSelecteds.filter(element => game.type !== element.type))
        :
        setGamesSelecteds([...gamesSelecteds, game])
    } else {
      setGamesSelecteds([game])
    }

  }, [gamesSelecteds])


  const renderItem = useCallback(({ item }) => {
    return (
      <ButtonTypeOfGame key={item.id} onPress={() => handleClickTypeGame(item)} colorButton={item.color}
        colorText={item.color} nameButton={item.type} isSelected={gamesSelecteds.includes(item)} >
      </ButtonTypeOfGame >
    )
  }, [gamesSelecteds, gamesRedux.games]);


  const returnFilteredsBets = useCallback(() => {
    return betsOfUserOnTheApi.map((bet: any, index: number) => {
      const date = bet.updated_at.split(' ')[0].replaceAll('-', '/')
      const price = `(R$ ${bet.price.toFixed(2).replace('.', ',')})`
      let game: any;

      if (games !== undefined) {
        game = games.filter((game) => game.type === bet.type)[0]
      }

      return (
        <CardOfIndividualGame onPress={() => { }} color={game !== undefined ? game.color : '#fff'} key={index + 1} hasIconTrash={false} numbersSelecteds={bet.numbers_selecteds}
          price={price} date={date} type={bet.type}
        ></CardOfIndividualGame>
      )
    })
  }, [betsOfUserOnTheApi]);

  return (
    <>
      <CustomHeader navigation={navigation} />
      <Container>

        <TextTitle>RECENT GAMES</TextTitle>
        <TextFilters>FIlters</TextFilters>

        <BoxButtonTypeOfGame>
          <FlatList
            data={games}
            horizontal={true}
            keyExtractor={(item: any) => item.id}
            renderItem={renderItem}
          />
        </BoxButtonTypeOfGame>

        <BoxAllGames>


          {

            loading ?
              <ActivityIndicator size="large" color="#B5C401" />
              :
              <ScrollView>
                {returnFilteredsBets()}
              </ScrollView>
          }

        </BoxAllGames>

      </Container>
    </>
  );
}

export default MyBets;