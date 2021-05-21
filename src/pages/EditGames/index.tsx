import React, { useState, useCallback, useEffect } from 'react';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {
  Container, MarkupLogo, TextLogo, TextCopyright,
  ContainerTypeOfCard, BoxButtonCard, TitleTypeOfCard, Button, TextButton,
  BoxForgetPassword, TextForgetPassword, TextInput, BoxIconEye
} from './styles';
import BoxInput from '../../components/BoxInput';
import Card from '../../components/Card';
import api from '../../services/api';
import { Alert, ActivityIndicator } from 'react-native';
import IconFont from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { saveGames } from '../../store/actions'
import { IGameState, IMainReducer } from '../../store/reducers'

interface EditGamesProps {
  navigation: any;
}



const EditGames: React.FC<EditGamesProps> = ({ navigation }) => {
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('');
  const [price, setPrice] = useState(0);
  const [max_number, setMaxNumber] = useState(0);
  const [min_cart_value, setMinCartValue] = useState(0);
  const [range, setRange] = useState(0);

  const dispatch = useDispatch();
  const userRedux = useSelector((state: RootState) => state.userReducer.user);
  const gamesRedux = useSelector((state: IMainReducer) => state.gameReducer.games);


  const [loading, setLoading] = useState(false);

  useEffect(() => {

  }, [gamesRedux, userRedux])

  const handleClickButton = useCallback(async () => {
    const games = gamesRedux;
    setLoading(true);

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userRedux.token.token}`
      }
    };

    let data = {
      "type": type,
      "description": description,
      "range": range,
      "price": price,
      "max_number": max_number,
      "color": "#1bdfd5",
      "min_cart_value": min_cart_value
    }

    try {

      await api.post('/games', data, config).then(async (response) => {
        if (games !== undefined) {
          games.push(response.data)
        }
      });

      await dispatch(saveGames(games));
      Alert.alert('Jogo criado com sucesso!')
      setLoading(false);
    } catch (error) {
      console.log('=> erro', error)
      setLoading(false);
      Alert.alert('Erro ao criar game!')
    }

  }, [type, description, color, price, max_number, min_cart_value, range])

  return (
    <>
      <Container >

        <ContainerTypeOfCard>
          <TitleTypeOfCard>Add a game</TitleTypeOfCard>

          <Card>
            <BoxInput textLabel='Type'>
              <TextInput autoCorrect={false} autoCapitalize={'none'} onChangeText={(text) => setType(text)}></TextInput>
            </BoxInput>
            <BoxInput textLabel='Description'>
              <TextInput autoCorrect={false} autoCapitalize={'none'} onChangeText={(text) => setDescription(text)}></TextInput>
            </BoxInput>
            <BoxInput textLabel='Color'>
              <TextInput autoCorrect={false} autoCapitalize={'none'} onChangeText={(text) => setColor(text)}></TextInput>
            </BoxInput>
            <BoxInput textLabel='Price'>
              <TextInput autoCorrect={false} autoCapitalize={'none'} onChangeText={(text) => setPrice(text)}></TextInput>
            </BoxInput>
            <BoxInput textLabel='Max-Number'>
              <TextInput autoCorrect={false} autoCapitalize={'none'} onChangeText={(text) => setMaxNumber(text)}></TextInput>
            </BoxInput>
            <BoxInput textLabel='Min-Cart-Value'>
              <TextInput autoCorrect={false} autoCapitalize={'none'} onChangeText={(text) => setMinCartValue(text)}></TextInput>
            </BoxInput>
            <BoxInput textLabel='Range'>
              <TextInput autoCorrect={false} autoCapitalize={'none'} onChangeText={(text) => setRange(text)}></TextInput>
            </BoxInput>
            {
              loading ?
                <ActivityIndicator size="large" color="#B5C401" />
                :
                <BoxButtonCard>
                  <Button>
                    <TextButton style={{ color: '#B5C401', marginRight: 10 }} onPress={() => handleClickButton()}>Save Game</TextButton>
                    <IconAnt name='arrowright' size={30} color='#B5C401'></IconAnt>
                  </Button>
                </BoxButtonCard>
            }
          </Card>
          <Button onPress={() => (navigation.goBack())}>
            <IconAnt name='arrowleft' size={30} color='#707070'></IconAnt>
            <TextButton style={{ color: '#707070', marginLeft: 10 }}>Back</TextButton>
          </Button>

        </ContainerTypeOfCard>

        <TextCopyright>Copyright 2021 - Philipe Loureiro</TextCopyright>

      </Container >
    </>
  );
}

export default EditGames;
