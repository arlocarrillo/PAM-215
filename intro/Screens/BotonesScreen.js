import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import { Switch } from 'react-native-web';

export default function BotonesScreen () {
  const [encendido, cambiarEncendido] = useState(false);
  const [color, cambiarColor] = useState('yellow');
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>CONTROL DE LUZ</Text>
        <Text style={[styles.luz,{color:encendido ? color:'black'}]}>
          {encendido ? 'Luz Encendida' : 'Luz Apagada'}
        </Text>
        <Switch
        value={encendido}
        onValueChange={() => cambiarEncendido (!encendido)}
        trackColor={{true:'yellow' , false:'gray'}}
        ></Switch>
        <View style={styles.contenedorBotones}>
          <Button title='Amarillo' onPress={()=>cambiarColor('yellow')} color='#cfc509ff'></Button>
          <Button title='Azul' onPress={()=>cambiarColor('blue')} color='blue'></Button>
          <Button title='Rojo' onPress={()=>cambiarColor('red')} color='#ac0909ff'></Button>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#545454ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contenedorBotones:{
    marginTop:15,
    flexDirection:"column",
    gap:15
  },
  titulo:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:20,
  },
  luz:{
    fontSize:18,
    marginBottom:10,
  },
});