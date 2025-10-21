import { Text, StyleSheet, View, Button, TextInput, Alert } from 'react-native'
import React, {useState} from 'react';

export default function InputScreen () {
  const [nombre,setNombre] = useState('');
  const [password,setpassword] = useState('');
  const [telefono,setTelefono] = useState('');

  const mostrarAlerta = () => {
    if (nombre.trim === '' || password.trim() === '' || telefono.trim() === '') {
      Alert.alert("Favor de llenar todos los campos");
      alert("Favor de llenar todos los campos");
    }else{
      //Alert para Android e iOS
      alert(`Nombre: ${nombre}\nContraseña: ${password}\nTeléfono: ${telefono}`);
      
      //Alert para web
      Alert.alert(`Nombre: ${nombre}\nContraseña: ${password}\nTeléfono: ${telefono}`);
    }
  }

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>TextInput & Alert</Text>
        <Text style={styles.textogeneral}>Nombre: </Text>
        <TextInput
        style={styles.input}
        placeholder='Escribe aquí'
        value={nombre}
        onChangeText={setNombre}
        />

        <Text style={styles.textogeneral}>Contraseña: </Text>
        <TextInput
        style={styles.input}
        placeholder='Escribe aquí'
        secureTextEntry={true}
        value={password}
        onChangeText={setpassword}
        />

        <Text style={styles.textogeneral}>Teléfono: </Text>
        <TextInput
        style={styles.input}
        placeholder='Escribe aquí'
        keyboardType='phone-pad'
        value={telefono}
        onChangeText={setTelefono}
        />

        <Button
        title='Mostrar Alerta'
        onPress={mostrarAlerta}
        />
      </View>
    )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#ab1f1fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontFamily:"Times New Roman",
    fontSize:30,
    color:'#3bc8f3ff',
    fontWeight:'bold',
    fontDecorationLine:'underline',
    marginBottom:20,
  },
  textogeneral:{
    fontFamily:"Courier",
    fontSize:20,
    fontWeight:'bold',
    color:'#ffffff',
    marginTop:10,
  },
  input:{
    width:'50%',
    borderColor:'gray',
    borderWidth:3,
    borderRadius:5,
    padding:5,
    backgroundColor:'#ffffff',
    marginBottom:10,
  }
});