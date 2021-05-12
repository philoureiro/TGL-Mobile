import React, { useState, useEffect, useCallback } from 'react';
import {
  Container, BoxAllNumbersGames, BoxButtonTypeOfGame,
  TextFilters, TextTitle, BoxDescriptionOfBet, FlatList, ScrollView,
  GrayMarkup, BoxRowButtons, TextFillYourBet, TextDescriptionOfBet, BoxButtonCart
  , BoxGameActionButtons
} from './styles';
import IconZocial from 'react-native-vector-icons/Zocial';
import ButtonTypeOfGame from '../../components/ButtonTypeOfGame';
import CustomHeader from '../../components/CustomHeader';
import ButtonAround from '../../components/ButtonAround';
import { getDataOfJson } from '../../services/apiii';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';
import { RootState } from '../../store/'
import GameActionButton from '../../components/GameActionButton';

interface NewBetProps {
  navigation: any;
}

interface IGame {
  numbersSelecteds: number[];
  color: string;
  price: number;
  date: string;
  type: string;
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


const NewBet: React.FC<NewBetProps> = ({ navigation }) => {
  const gamesRedux = useSelector((state: RootState) => state.gameReducer);
  const [loading, setLoading] = useState(false);

  const [games, setGames] = useState(gamesRedux.games);
  const [gameSelected, setGameSelected] = useState<IGameProps>(gamesRedux.games[0]);

  const [numbersSelecteds, setnumbersSelecteds] = useState<number[]>([]);
  const [numbersSelectedsInCart, setnumbersSelectedsInCart] = useState<IGame[]>(
    [],
  );



  useEffect(() => {
    //setInfoOfGames(getDataOfJson());
    console.log(numbersSelecteds);
  }), [gameSelected, numbersSelecteds];

  const handleClickTypeGame = useCallback((game) => {
    setGameSelected(game)
    setnumbersSelecteds([]);

  }, [gameSelected])

  const renderItem = useCallback(({ item }) => {
    return (
      <ButtonTypeOfGame key={item.id} onPress={() => handleClickTypeGame(item)} colorButton={item.color}
        colorText={item.color} nameButton={item.type} isSelected={gameSelected === item} >
      </ButtonTypeOfGame >
    )
  }, [gameSelected]);

  const handleClickAroundButtons = useCallback((number) => {
    // setnumbersSelecteds([...numbersSelecteds, number])
    console.log('=>', number)
    console.log('=>', numbersSelecteds.includes(number))

    if (!numbersSelecteds.includes(number) && numbersSelecteds.length < gameSelected.max_number) {
      setnumbersSelecteds([...numbersSelecteds, number].sort((a, b) => a - b))
    } else {
      setnumbersSelecteds(numbersSelecteds.filter(element => element !== number))
    }


  }, [numbersSelecteds]);

  const returnAroundButtons = useCallback(() => {
    let aroundButtons = [];
    for (let index = 0; index < gameSelected.range; index++) {

      aroundButtons.push(<ButtonAround key={index + 1} onPress={() => handleClickAroundButtons(index + 1)} numberButton={index + 1}
        color={gameSelected.color} isSelected={numbersSelecteds.includes(index + 1)} />)
    }
    return aroundButtons;
  }, [gameSelected, numbersSelecteds]);

  return (
    <>
      <CustomHeader navigation={navigation} >
        <BoxButtonCart onPress={() => (navigation.openDrawer())} >
          <IconZocial name='cart' size={42} color='#B5C401'></IconZocial>
        </BoxButtonCart>
      </CustomHeader>
      <Container>
        <TextTitle>{`NET BET FOR ${gameSelected?.type.toUpperCase()}`}</TextTitle>
        <TextFilters>Choose a game</TextFilters>

        <BoxButtonTypeOfGame>
          <FlatList
            data={games}
            horizontal={true}
            keyExtractor={(item: any) => item.id}
            renderItem={renderItem}
          />
        </BoxButtonTypeOfGame>


        <ScrollView>
          <BoxDescriptionOfBet>
            <TextFillYourBet>Fill your bet</TextFillYourBet>
            <TextDescriptionOfBet>
              {`${gameSelected?.description}`}
            </TextDescriptionOfBet>
          </BoxDescriptionOfBet>


          {numbersSelecteds.length > 0
            ?
            <BoxGameActionButtons>
              <GameActionButton
                nameButton={'Complete game'}
                onPress={() => { }}
                backgroundColor={'#fff'}
                color={'#B5C401'}
                borderColor={'#B5C401'}
              ></GameActionButton>

              <GameActionButton
                nameButton={'Clear game'}
                onPress={() => setnumbersSelecteds([])}
                backgroundColor={'#fff'}
                color={'#B5C401'}
                borderColor={'#B5C401'}
              ></GameActionButton>

              <GameActionButton
                nameButton={'Add to cart'}
                onPress={() => { Alert.alert('oi') }}
                backgroundColor={'#B5C401'}
                color={'#fff'}
                borderColor={'#B5C401'}
              >
                <IconZocial name='cart' size={22} color='#fff'></IconZocial>
              </GameActionButton>
            </BoxGameActionButtons>
            : null
          }

          <GrayMarkup />

          <BoxAllNumbersGames>
            {gameSelected ? returnAroundButtons() : null}
          </BoxAllNumbersGames>

        </ScrollView>


      </Container>
    </>
  );
}

export default NewBet;
