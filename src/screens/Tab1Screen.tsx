import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';
import {colores} from '../theme/appTheme';



export const Tab1Screen = () => {
  useEffect(() => {
    console.log('tab 1');
  }, []);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title} > Iconos </Text>
      <Text> <Icon name="airplane-outline" size={30} color={colores.primary} /></Text>
      
    </View>
  );
};

export default Tab1Screen;
