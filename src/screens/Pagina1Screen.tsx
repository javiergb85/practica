import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {DrawerScreenProps} from '@react-navigation/drawer'
import {TouchableOpacity} from 'react-native'
import { styles, colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
 

//interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}
export const Pagina1Screen = ({navigation}: Props) => {

  useEffect(() => {
        
    navigation.setOptions({
        headerLeft: () => (
            <TouchableOpacity
                style={{
                    marginLeft: 10
                }}
                onPress={ () => navigation.toggleDrawer()  }
            >
                <Icon 
                    name="menu-outline"
                    color={ colores.primary }
                    size={ 35 }
                />
            </TouchableOpacity>
        )
    })


}, [])
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1 Screen</Text>

      <Button
        title="ir a pagina 2"
        onPress={() => navigation.navigate('Pagina2Screen')}></Button>
      <Text> Navegar con argumentos </Text>

      <View style={{flexDirection: 'row'}}> 
        
      <TouchableOpacity style={{...styles.botonGrande, backgroundColor:'#5856d6'}}
        onPress={() =>
          navigation.navigate('PersonaScreen', {id: 1, nombre: 'Javier'})
        }>
       
        <Text style={styles.botonGrandeTexto}> Javier </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{...styles.botonGrande, backgroundColor:'#ff9427'}}
        onPress={() =>
          navigation.navigate('PersonaScreen', {id: 1, nombre: 'Evelyn'})
        }>
       
        <Text style={styles.botonGrandeTexto}> Evelyn </Text>
      </TouchableOpacity>
          </View>
     

    </View>
  );
};

export default Pagina1Screen;
