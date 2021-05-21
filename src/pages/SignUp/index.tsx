import React, { useState, useCallback } from 'react';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconFont from 'react-native-vector-icons/FontAwesome';
import {
  Container, MarkupLogo, TextLogo, TextCopyright,
  ContainerTypeOfCard, BoxButtonCard, TitleTypeOfCard,
  Button, TextButton, TextInput, BoxIconEye
} from './styles';
import BoxInput from '../../components/BoxInput';
import Card from '../../components/Card';
import { Alert } from 'react-native';
import api from '../../services/api'

interface SignUpProps {
  navigation: any;
}

const SignUp: React.FC<SignUpProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [secureText, setSecureText] = useState(true);

  const handleClickButton = useCallback(async () => {

    try {
      await api.post('/users', {
        "username": userName,
        "email": email,
        "password": password,
        "password_confirmation": password
      }).then(response => {
        navigation.navigate('SignIn')
      })
    } catch (error) {
      Alert.alert('Erro ao criar usuário!')
      console.log('=>ERRO', error)
    }
  }, [userName, email, password]);



  return (
    <>
      <Container >

        <TextLogo>TGL</TextLogo>
        <MarkupLogo />

        <ContainerTypeOfCard>
          <TitleTypeOfCard>Registration</TitleTypeOfCard>

          <Card>
            <BoxInput textLabel='Name'>
              <TextInput autoCorrect={false} autoCapitalize={'none'} onChangeText={(text) => setUserName(text)}></TextInput>
            </BoxInput>
            <BoxInput textLabel='Email'>
              <TextInput autoCorrect={false} autoCapitalize={'none'} onChangeText={(text) => setEmail(text)}></TextInput>
            </BoxInput>
            <BoxInput textLabel='Password'>
              <TextInput autoCorrect={false} secureTextEntry={secureText} autoCapitalize={'none'} onChangeText={(text) => setPassword(text)}></TextInput>
              <BoxIconEye onPress={() => setSecureText(!secureText)}>
                <IconFont name='eye' size={25} ></IconFont>
              </BoxIconEye>
            </BoxInput>


            <BoxButtonCard>
              <Button>
                <TextButton style={{ color: '#B5C401', marginRight: 10 }} onPress={() => handleClickButton()}>Register</TextButton>
                <IconAnt name='arrowright' size={30} color='#B5C401'></IconAnt>
              </Button>
            </BoxButtonCard>
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

export default SignUp;
