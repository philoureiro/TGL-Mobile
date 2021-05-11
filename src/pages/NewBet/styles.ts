import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  background-color: #F7F7F7;
`;

export const TextTitle = styled.Text`
  margin-top: 20px;
  font-size: 22px;
  margin-left: 20px;
  color: #707070;
  font-weight: bold;
  font-style: italic;
`;

export const TextFilters = styled.Text`
  font-size: 18px;
  margin-top: 20px;
  margin-left: 20px;
  color: #868686;
  font-weight: normal;
  font-style: italic;
`;

export const TextFillYourBet = styled.Text`
  font-size: 18px;
  margin-top: 20px;
  margin-left: 20px;
  color: #868686;
  font-weight: bold;
  font-style: italic;
`;


export const TextDescriptionOfBet = styled.Text`
  font-size: 16px;
  margin-top: 20px;
  margin-left: 20px;
  color: #868686;
  font-weight: normal;
  font-style: italic;
  justify-content: flex-start;
  align-items: stretch;
`;


export const BoxButtonTypeOfGame = styled.View`
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  height: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BoxDescriptionOfBet = styled.View`
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  background-color: purple;
  min-height: 170px
`;

export const FlatList = styled.FlatList`
`;


export const BoxRowButtons = styled.View`
  flex-direction: row;
  width: 100%;
  background-color: purple;
  justify-content: flex-start;
  align-items: stretch;
  flex:1;
`;

export const GrayMarkup = styled.View`
  background-color: #C1C1C1;
  height: 7px;
  width: 40px;
  left: 170px;
  border-radius: 15px;
  margin-top: 15px;
`;

export const BoxAllNumbersGames = styled.View`
  background-color: green ;
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ScrollView = styled.ScrollView``;


export const BoxButtonCart = styled.TouchableOpacity`
  width: 100px;
  justify-Content: center;
  align-items: center;
  margin-top: -5px;

`;
