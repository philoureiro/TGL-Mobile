import React, { useState, useCallback } from 'react';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {
  Container, MarkupLogo, TextLogo, TextCopyright,
  ContainerTypeOfCard, BoxButtonCard, TitleTypeOfCard, Button, TextButton,
  BoxForgetPassword, TextForgetPassword, TextInput
} from './styles';
import BoxInput from '../../components/BoxInput';
import Card from '../../components/Card';
import api from '../../services/api';
import { Alert, ActivityIndicator } from 'react-native';

interface RecoveryPasswordProps {
  navigation: any;
}
const RecoveryPassword: React.FC<RecoveryPasswordProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleClickButton = useCallback(async () => {
    setLoading(true);
    try {
      await api.post('/forgotpassword', {
        "email": email,
        "redirect_url": "http://www.meusistema.com/recovery-password"
      }).then(response => {
        setLoading(false);
        navigation.navigate('UpdatePassword')
      })
    } catch (error) {
      console.log('=>', error)
      setLoading(false);
      Alert.alert('Erro ao recuperar senha!')
    }

  }, [email])
  return (
    <>
      <Container >

        <TextLogo>TGL</TextLogo>
        <MarkupLogo />

        <ContainerTypeOfCard>
          <TitleTypeOfCard>Reset password</TitleTypeOfCard>

          <Card>
            <BoxInput textLabel='Email'>
              <TextInput autoCorrect={false} autoCapitalize={'none'} onChangeText={(text) => setEmail(text)}></TextInput>
            </BoxInput>

            {
              loading ?
                <ActivityIndicator size="large" color="#B5C401" /> :
                <BoxButtonCard>
                  <Button>
                    <TextButton style={{ color: '#B5C401', marginRight: 10 }} onPress={() => handleClickButton()}>Reset</TextButton>
                    <IconAnt name='arrowright' size={30} color='#B5C401'></IconAnt>
                  </Button>
                </BoxButtonCard>


            }

          </Card>
          <Button onPress={() => (navigation.goBack())}>
            <IconAnt name='arrowleft' size={30} color='#707070'></IconAnt>
            <TextButton style={{ color: '#707070', marginLeft: 10 }}>Back</TextButton>
          </Button>
          <Button onPress={() => (navigation.navigate('SignUp'))}>
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
