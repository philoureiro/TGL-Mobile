
import React, { useEffect, useState, useCallback } from 'react';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';

import NewBet from '../../pages/NewBet';

import Cart from '../Cart';


interface DrawerCustomProps {
  navigation: any;
  betsInCart: any;
}


const Drawer: React.FC<DrawerCustomProps> = (props) => {

  const DrawerNav = createDrawerNavigator();

  return (
    <DrawerNav.Navigator
      drawerPosition="right"
      drawerContent={(props) => <Cart  {...props} />}>
      <DrawerNav.Screen name="NewBet" component={NewBet} />
    </DrawerNav.Navigator>
  );
}

export default Drawer;
