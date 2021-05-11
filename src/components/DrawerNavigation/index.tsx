
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';

import IconZocial from 'react-native-vector-icons/Zocial';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {
  Container, BoxIconExit, Title,
  BoxTitleAndIcon, ScrollView, BoxInternalCart, ButtonSave,
  BoxPriceTotal, TextPriceCart, TextCart, TextTotalCart, TextButton
} from './styles';
import Account from '../../pages/Account';
import CardOfIndividualGame from '../../components/CardOfIndividualGame';
import NewBet from '../../pages/NewBet';


interface DrawerProps {
  page: any;
}

const Drawer: React.FC<DrawerProps> = ({ page }) => {
  const DrawerNav = createDrawerNavigator();
  return (
    <DrawerNav.Navigator
      drawerPosition="right"
      drawerContent={(props) => <CustomDrawerComp {...props} />}>
      <DrawerNav.Screen name="NewBet" component={NewBet} />
    </DrawerNav.Navigator>
  );
}

export default Drawer;


export const CustomDrawerComp = (props) => {
  const { navigation } = props;

  return (

    <Container>
      <BoxTitleAndIcon>
        <BoxIconExit onPress={() => { navigation.closeDrawer() }}>
          <IconFeather name='x' size={25} color='#B5C300'></IconFeather>
        </BoxIconExit>
        <IconZocial name='cart' size={35} color='#B5C300'></IconZocial>
        <Title>CART</Title>
      </BoxTitleAndIcon>
      <ScrollView>
        <BoxInternalCart>
          <CardOfIndividualGame hasIcon={{ nameIcon: 'trash-o', colorIcon: '#707070', sizeIcon: 25 }}></CardOfIndividualGame>
          <CardOfIndividualGame hasIcon={{ nameIcon: 'trash-o', colorIcon: '#707070', sizeIcon: 25 }}></CardOfIndividualGame>
          <CardOfIndividualGame hasIcon={{ nameIcon: 'trash-o', colorIcon: '#707070', sizeIcon: 25 }}></CardOfIndividualGame>
        </BoxInternalCart>
        <BoxPriceTotal>
          <TextCart>CART</TextCart>
          <TextTotalCart>TOTAL:</TextTotalCart>
          <TextPriceCart>R$ 7,50</TextPriceCart>
        </BoxPriceTotal>

        <ButtonSave onPress={() => (navigation.navigate('SignUp'))}>
          <TextButton style={{ color: '#B5C401', marginLeft: 10 }}>Save</TextButton>
          <IconAnt name='arrowright' size={30} color='#B5C401'></IconAnt>
        </ButtonSave>
      </ScrollView>

    </Container >


  );
};

