//imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

//Main: Zona de componentes
export default function App() {
  const[contador,setContador]=useState(0);
  return (
    <View style={styles.container}>

      <Text style={styles.texto}>Contador:</Text>
      <Text style={styles.texto2}>{contador}</Text>

      <View style={styles.contenedorBotones}>
        <Button color='#4110e1ff' title='Incrementar' onPress={()=>setContador(contador+1)}></Button>
        <Button color='#d61f1fff' title='Quitar' onPress={()=>setContador(contador-1)}></Button>
        <Button color='#4fb8dcff' title='Reiniciar' onPress={()=>setContador(0)}></Button>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

//Estilos: Zona de los estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1fab62ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontFamily: "Times New Roman",
    fontSize:30,
    color: '#c70c0c',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  texto2:{
    fontFamily: "Courier",
    fontSize:40,
    color: '#330ddbff',
    fontWeight: '500',
    textDecorationLine: 'line-through',
  },
  contenedorBotones:{
    marginTop:15,
    flexDirection:"row",
    gap:15
  },
});