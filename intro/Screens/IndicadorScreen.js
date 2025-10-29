import { Text, StyleSheet, View, Button, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'

export default function IndicadorScreen () {
  const [loading, setLoading] = useState(false);
  const startLoading =() => {
    setLoading(true);
    setTimeout(()=> setLoading(false),3000);
  };
    if(loading){
      return(
      <View style={styles.container}>
        <View>
          <ActivityIndicator
          size='large'
          color='#d60c0cff'
          animating={true}
          hidesWhenStopped={true}
          />
          <Text style={styles.texto}>Cargando...</Text>
        </View>
      </View>
      );
    }
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>ActivityIndicator</Text>
        <Button title='Carga de datos' onPress={startLoading}/>
      </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#771818ff",
  },
  titulo:{
    color:'#ffffffff',
    fontSize:20,
    fontWeight:'bold',
    marginBottom:20,
    alignContent:"center",
    justifyContent:"center",
  },
  texto:{
    fontWeight:'bold',
    color:'#ffffffff',
  }
});