import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<RootStackParams,'PersonaScreen'>{}

interface RouteParams {
  id: number;
  nombre: string;
}

export const PersonaScreen = ({route, navigation}: Props) => {
   const params = route.params as RouteParams

   useEffect(() => {
     navigation.setOptions({
         title: params.nombre
     })
   }, [])
  return (
    <View style={styles.globalMargin}>
     
      <Text style={styles.title}> {params.nombre}  </Text>
    </View>
  );
};

export default PersonaScreen;
