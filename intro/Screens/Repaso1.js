import { Text, StyleSheet, View, ImageBackground, Button, Alert, Switch } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-web';

export default function Repaso1 () {
    const [encendido, cambiarEncendido] = useState(false);
    const [nombre,setNombre] = useState('');
    const [correo,setcorreo] = useState('');
    const mostrarAlerta = () => {
        if(nombre.trim() === ''){
            Alert.alert("Nombre no puede estar vacío");
            alert("Nombre no puede estar vacío");
        }else if(correo.trim() === ''){
            Alert.alert("Correo no puede estar vacío");
            alert("Correo no puede estar vacío");
        }else if(!correo.includes('@')){
            Alert.alert("Correo electrónico inválido");
            alert("Correo electrónico inválido");
        }else if(!correo.includes('.')){
            Alert.alert("Correo electrónico inválido");
            alert("Correo electrónico inválido");
        }
        else if(!encendido){
          Alert.alert("Debe aceptar los términos y condiciones");
          alert("Debe aceptar los términos y condiciones");
        }
        else{
          //Alert para Android e iOS
          alert(`Nombre: ${nombre}\nCorreo electrónico: ${correo}`);
          
          //Alert para web
          Alert.alert(`Nombre: ${nombre}\Correo electrónico: ${correo}`);
        }
      }
      
    return (
    <ImageBackground source={require('../assets/Fondo1.jpg')} style={styles.container}>
        <View style={styles.overlayContainer}>
            <Text style={styles.titulo}>Registro de Usuario</Text>
            <TextInput
            style={styles.Input}
            placeholder='Nombre completo'
            value={nombre}
            onChangeText={setNombre}>
            </TextInput>

            <TextInput
            style={styles.Input}
            placeholder='Correo electrónico'
            value={correo}
            onChangeText={setcorreo}>
            </TextInput>

            <View style={styles.TyC}>
                <Text style={styles.textogeneral}>Términos y Condiciones</Text>
                <Switch
                    value={encendido}
                    onValueChange={() => cambiarEncendido (!encendido)}
                    trackColor={{true:'yellow' , false:'gray'}}
                ></Switch>
            </View>

            <Button
            title='Registrarse'
            onPress={mostrarAlerta}
            ></Button>
        </View>
    </ImageBackground>
    )
}
const styles = StyleSheet.create({
    titulo:{
    color:'#ffffffff',
    fontSize:20,
    fontWeight:'bold',
    marginBottom:20,
  },
  Input:{
    width:'100%',
    borderColor:'gray',
    borderWidth:3,
    borderRadius:5,
    padding:5,
    backgroundColor:'#ffffff',
    marginBottom:10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textogeneral:{
    //fontFamily:"Courier",
    fontSize:15,
    fontWeight:'bold',
    color:'#ffffffff',
    marginTop:10,
    marginBottom:10,
  },
  container2: {
    flex: 1,
    backgroundColor: '#545454ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TyC:{
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:10,
    flexDirection:"row",
    gap:10,
  },
  overlayContainer: {
    width: '85%',
    padding: 20,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.6)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 8,
  },
});