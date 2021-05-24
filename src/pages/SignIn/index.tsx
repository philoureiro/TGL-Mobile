import React, { useState, useEffect, useCallback } from 'react';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconAnt from 'react-native-vector-icons/AntDesign';
import { useSelector, useDispatch } from 'react-redux';
import { Alert, ActivityIndicator } from 'react-native';
import {
  Container, MarkupLogo, TextLogo, TextCopyright,
  ContainerTypeOfCard, BoxButtonCard, TitleTypeOfCard, Button, TextButton,
  BoxForgetPassword, TextForgetPassword, TextInput, BoxIconEye,
} from './styles';
import BoxInput from '../../components/BoxInput';
import Card from '../../components/Card';
import { saveDataOfUser, saveGames } from '../../store/actions';
import { IUserState } from '../../store/reducers'
import { RootState } from '../../store'

import api from '../../services/api'

interface SignInProps {
  navigation: any;
}

const SignIn: React.FC<SignInProps> = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleClickLogin = useCallback(async () => {
    setLoading(true);
    let currentToken, user;

    try {
      await api.post('/sessions', {
        "email": email,
        "password": password

      }).then(async response => {
        currentToken = response.data.currentToken;
        user = response.data.user;
        //  console.log('=>response', response.data);
        const userData: IUserState = {
          user: {
            refreshToken: currentToken.refreshToken,
            token: {
              token: currentToken.token,
              type: currentToken.type,
            },
            email: user.email,
            id: user.id,
            username: user.username,
          }
        }

        await dispatch(saveDataOfUser(userData));
        setLoading(false);
      })

      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${currentToken.token}`
        }
      }

      await api.get('/games', config).then(async response => {
        // console.log('=>', response.data)
        await dispatch(saveGames(response.data));
        setLoading(false);
      })

      navigation.navigate('TabNavigator')
    } catch (error) {
      setLoading(false);
      console.log(error)
      Alert.alert('Erro ao logar!');
    }


  }, [email, password]);



  return (
    <>
      <Container>

        <TextLogo>TGL</TextLogo>
        <MarkupLogo />

        <ContainerTypeOfCard>
          <TitleTypeOfCard>Authentication</TitleTypeOfCard>

          <Card>
            <BoxInput textLabel='Email'>
              <TextInput autoCorrect={false} autoCapitalize={'none'} onChangeText={(text) => setEmail(text)}></TextInput>
            </BoxInput>
            <BoxInput textLabel='Password'>
              <TextInput autoCorrect={false} secureTextEntry={secureText} autoCapitalize={'none'} onChangeText={(text) => setPassword(text)}></TextInput>
              <BoxIconEye onPress={() => setSecureText(!secureText)}>
                <IconFont name='eye' size={25} ></IconFont>
              </BoxIconEye>
            </BoxInput>

            <BoxForgetPassword onPress={() => (navigation.navigate('RecoveryPassword'))}>
              <TextForgetPassword>
                I forget my password
              </TextForgetPassword>
            </BoxForgetPassword>

            {
              loading ?
                <ActivityIndicator size="large" color="#B5C401" /> :
                <BoxButtonCard>
                  <Button onPress={() => handleClickLogin()} >
                    <TextButton style={{ color: '#B5C401', marginRight: 10 }}>Log In</TextButton>
                    <IconAnt name='arrowright' size={30} color='#B5C401'></IconAnt>
                  </Button>
                </BoxButtonCard>
            }

          </Card>

          <Button onPress={() => (navigation.navigate('SignUp'))}>
            <TextButton style={{ color: '#707070', marginLeft: 10 }}>Sign Up</TextButton>
            <IconAnt name='arrowright' size={30} color='#707070'></IconAnt>
          </Button>
        </ContainerTypeOfCard>

        <TextCopyright>Copyright 2021 - Philipe Loureiro</TextCopyright>

      </Container >
    </>
  );
}

export default SignIn;
