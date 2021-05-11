import React, { useState, useCallback } from 'react';
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

interface RecoveryPasswordProps {
  navigation: any;
}
const RecoveryPassword: React.FC<RecoveryPasswordProps> = ({ navigation }) => {
  const [token, setToken] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleClickButton = useCallback(async () => {
    setLoading(true);
    try {
      await api.put('/forgotpassword', {
        "token": token,
        "password": password,
        "password_confirmation": password
      }).then(response => {
        console.log('=>', response.data)
        setLoading(false);
        navigation.navigate('SignIn')
      })

    } catch (error) {
      setLoading(false);
      Alert.alert('Erro ao trocar a senha!')
    }

  }, [token, password])
  return (
    <>
      <Container >

        <TextLogo>TGL</TextLogo>
        <MarkupLogo />

        <ContainerTypeOfCard>
          <TitleTypeOfCard>Update password</TitleTypeOfCard>

          <Card>
            <BoxInput textLabel='Token'>
              <TextInput autoCorrect={false} autoCapitalize={'none'} onChangeText={(text) => setToken(text)}></TextInput>
            </BoxInput>
            <BoxInput textLabel='Password'>
              <TextInput autoCorrect={false} secureTextEntry={secureText} autoCapitalize={'none'} onChangeText={(text) => setPassword(text)}></TextInput>
              <BoxIconEye onPress={() => setSecureText(!secureText)}>
                <IconFont name='eye' size={25} ></IconFont>
              </BoxIconEye>
            </BoxInput>

            {
              loading ?
                <ActivityIndicator size="large" color="#B5C401" />
                :
                <BoxButtonCard>
                  <Button>
                    <TextButton style={{ color: '#B5C401', marginRight: 10 }} onPress={() => handleClickButton()}>Update</TextButton>
                    <IconAnt name='arrowright' size={30} color='#B5C401'></IconAnt>
                  </Button>
                </BoxButtonCard>
            }
          </Card>
          <Button onPress={() => (navigation.goBack())}>
            <IconAnt name='arrowleft' size={30} color='#707070'></IconAnt>
            <TextButton style={{ color: '#707070', marginLeft: 10 }}>Back</TextButton>
          </Button>
          <Button onPress={() => (navigation.navigate('SignIn'))}>
            <TextButton style={{ color: '#707070', marginLeft: 10, marginTop: 10 }}>Sign Up</TextButton>
            <IconAnt name='arrowright' size={30} color='#707070'></IconAnt>
          </Button>
        </ContainerTypeOfCard>

        <TextCopyright>Copyright 2021 - Philipe Loureiro</TextCopyright>

      </Container >
    </>
  );
}

export default RecoveryPassword;
