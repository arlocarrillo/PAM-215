import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Switch, Button } from 'react-native';

export default function App() {
  const[estatus, setEstatus] = useState(false);
  return (
    <ImageBackground source={('')} style={styles.container}>
      <View>
        <Text style={styles.titulo}>Mis deberes</Text>
        <Text style={styles.fecha}>07/11/2025</Text>
        <StatusBar style="auto" />
      </View>
      <ScrollView style={styles.contenedorScroll}>
        <Text style={styles.titulo}>Categorías</Text>
        <View style={styles.botones}>
        <Button title="Estudios" style={styles.botones} color='#020c7bff'/>
        </View>
        <View style={styles.botones}>
        <Button title="Hogar" style={styles.botones} color='#8b257cff'/>
        </View>
        <View style={styles.botones}>
        <Button title="Trabajo" style={styles.botones} color='#187703ff'/>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize:30,
    fontWeight:'bold',
  },
  fecha:{
    fontFamily:'Courier',
    marginTop:10,
    marginBottom:10,
    color:'#2e2e2eff',
  },
  contenedorScroll:{
    width:'80%',
    height:'30%',
    padding:20,
    borderRadius:9,
    shadowOffset:{width:0, height:2},
    shadowOpacity:0.3,
    shadowRadius:4,
    shadowColor:'black',
    elevation:8,
    backgroundColor:'gray',
  },
  botones:{
    marginTop:10,
    marginBottom:10,
  }
});
