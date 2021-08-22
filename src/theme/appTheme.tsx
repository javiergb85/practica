import {StyleSheet} from 'react-native';

export const colores = {
  primary: '#5856D6',
  secondary:'FFFFFF'

}

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  botonGrande: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  botonGrandeTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    
  },
  avatarContainer:{
   
    //backgroundColor:'blue'
  },
  avatar:{
    marginTop: 30,
    width: 100,
    height: 100,
    borderRadius: 100
  },
  menuContainer:{
    marginVertical: 30,
    marginHorizontal: 50,
   
    
  },
  menuBoton:{
    marginVertical:10
  },
  menuTexto: {
    fontSize: 20,
 
  }

});
