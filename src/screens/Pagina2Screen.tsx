import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';

export const Pagina2Screen = () => {
    const navigator = useNavigation()
    
    //useEffect es para ejecutar efectos secundarios
    useEffect(() => {
       navigator.setOptions({
         title: 'Hola Mundo',
         headerBackTitle: 'atras'
       })
    }, [])
  return (
    <View>
     <Text style={styles.title}>Pagina2 Screen</Text>
      <Button title="ir a pagina 3" onPress={ () => navigator.navigate('Pagina3Screen') }></Button>
    </View>
  );
};

export default Pagina2Screen;
