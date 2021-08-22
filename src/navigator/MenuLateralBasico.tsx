import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react'
import { useWindowDimensions } from 'react-native';
import SettingsScreen from '../screens/SettingsScreen';
import StackNavigator from './StackNavigator';

const Drawer = createDrawerNavigator();

const MenuLateralBasico = () => {
    const {width} = useWindowDimensions();
    
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default MenuLateralBasico;
