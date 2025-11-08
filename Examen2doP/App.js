import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Switch, Button } from 'react-native';

export default function App() {
  const[escuela, setEscuela] = useState(false);
  const[hogar, setHogar] = useState(false);
  const[trabajo, setTrabajo] = useState(false);
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
        <Text style={styles.fecha}>Escuela</Text>
        <Text>Práctica 14 de React Native</Text>
        <Switch
          value={escuela}
          onValueChange={() => setEscuela(!escuela)}
        />
        <Text style={{color:escuela ? color:'red'}}>{escuela ? 'Completado' : 'Pendiente'}</Text>
        </View>

        <View style={styles.hogar}>
        <Text style={styles.fecha}>Hogar</Text>
        <Text>Lavar los trastes</Text>
        <Switch
          value={hogar}
          onValueChange={() => setHogar(!hogar)}
        />
        <Text style={[{color:hogar ? color:'red'}]}>{hogar ? 'Completado' : 'Pendiente'}</Text>
        </View>

        <View style={styles.trabajo}>
        <Text style={styles.fecha}>Trabajo</Text>
        <Text>Realizar negativos</Text>
        <Switch
          value={trabajo}
          onValueChange={() => setTrabajo(!trabajo)}
        />
        <Text style={{color:trabajo ? color:'red'}}>{trabajo ? 'Completado' : 'Pendiente'}</Text>
        </View>

        <Button title='Reiniciar' onPress={{}}/>
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
    marginTop:50,
    marginBottom:50,
    height:30,
    width:'100%',
    backgroundColor:'#61dafb',
  },
  hogar:{
    marginTop:50,
    marginBottom:50,
    height:30,
    width:'100%',
    backgroundColor:'#ffb6c1',
  },
  trabajo:{
    marginTop:50,
    marginBottom:80,
    height:30,
    width:'100%',
    backgroundColor:'#90ee90',
  },
  estado:{
    marginTop:20,
    fontSize:20,
    fontWeight:'bold',
  }
});
