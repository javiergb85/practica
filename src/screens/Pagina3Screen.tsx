import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button} from 'react-native';
import { styles } from '../theme/appTheme';
 

interface Props extends StackScreenProps<any, any>{};

export const Pagina3Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina3Screen</Text>
      <Button title= 'Regresar' onPress={() => navigation.pop()}></Button>
      <Button title= 'Regresar' onPress={() => navigation.popToTop()}></Button>
    </View>
  );
};

export default Pagina3Screen;