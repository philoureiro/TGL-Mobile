import React, { useState, useEffect } from 'react';
import {
  Container, BoxAllNumbersGames, BoxButtonTypeOfGame,
  TextFilters, TextTitle, BoxDescriptionOfBet, FlatList, ScrollView,
  GrayMarkup, BoxRowButtons, TextFillYourBet, TextDescriptionOfBet, BoxButtonCart
} from './styles';
import IconZocial from 'react-native-vector-icons/Zocial';
import ButtonTypeOfGame from '../../components/ButtonTypeOfGame';
import CustomHeader from '../../components/CustomHeader';
import ButtonAround from '../../components/ButtonAround';
import { getDataOfJson } from '../../services/apiii';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';

interface NewBetProps {
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

const NewBet: React.FC<NewBetProps> = ({ navigation }) => {

  const [infoOfGames, setInfoOfGames] = useState<infoOfGamesProps>();


  useEffect(() => {
    //setInfoOfGames(getDataOfJson());



  }), [];


  return (
    <>
      <CustomHeader navigation={navigation} >
        <BoxButtonCart onPress={() => (navigation.openDrawer())} >
          <IconZocial name='cart' size={42} color='#B5C401'></IconZocial>
        </BoxButtonCart>
      </CustomHeader>
      <Container>
        <TextTitle>NET BET FOR LOTOMANIA</TextTitle>
        <TextFilters>Choose a game</TextFilters>
        <BoxButtonTypeOfGame>
          <ScrollView horizontal={true} >
            {

            }
          </ScrollView>
        </BoxButtonTypeOfGame>

        <ScrollView>
          <BoxDescriptionOfBet>
            <TextFillYourBet>Fill your bet</TextFillYourBet>
            <TextDescriptionOfBet>
            </TextDescriptionOfBet>
          </BoxDescriptionOfBet>
          <GrayMarkup />

          <BoxAllNumbersGames>
            <ScrollView>
              <BoxRowButtons>
                <ButtonAround />
                <ButtonAround />
                <ButtonAround />
                <ButtonAround />
                <ButtonAround />
              </BoxRowButtons>
              <BoxRowButtons>
                <ButtonAround />
                <ButtonAround />
                <ButtonAround />
                <ButtonAround />
                <ButtonAround />
              </BoxRowButtons>
              <BoxRowButtons>
                <ButtonAround />
                <ButtonAround />
                <ButtonAround />
                <ButtonAround />
                <ButtonAround />
              </BoxRowButtons>
              <BoxRowButtons>
                <ButtonAround />
                <ButtonAround />
                <ButtonAround />
                <ButtonAround />
                <ButtonAround />
              </BoxRowButtons>
            </ScrollView>
          </BoxAllNumbersGames>

        </ScrollView>


      </Container>
    </>
  );
}

export default NewBet;
