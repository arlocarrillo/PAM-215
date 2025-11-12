import { Text, StyleSheet, View, Modal, Pressable, TextInput } from 'react-native'
import React, {useState} from 'react';

export default function ModalScreen() {
    const [mostrar, setMostrar] = useState(null);
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Bienvenido</Text>
        <Pressable style={styles.boton} onPress={()=>setMostrar('login')}>
            <Text style={styles.text}>Iniciar Sesión</Text>
        </Pressable>
        <Pressable style={styles.boton2} onPress={()=>setMostrar('registro')}>
            <Text style={styles.text}>Registro</Text>
        </Pressable>
        <Pressable style={styles.boton3} onPress={()=>setMostrar('alerta')}>
            <Text style={styles.text}>Alerta</Text>
        </Pressable>

//////////////////////////modal de login//////////////////////////
        <Modal
        animationType='slide'
        transparent={false}
        visible={mostrar==='login'}
        onRequestClose={()=>setMostrar(null)}
        >
            <View style={styles.container2}>
                <Text style={styles.titulo}>Formulario de inicio</Text>
                <TextInput style={styles.input} placeholder='Usuario' />
                <TextInput style={styles.input} placeholder='Contraseña' secureTextEntry={true} />
                <Pressable style={styles.boton} onPress={()=>setMostrar(null)}>
                    <Text style={styles.text}>Iniciar Sesión</Text>
                </Pressable>
            </View>
        </Modal>

////////////////////////////////modal de registro///////////////////////////////////////
        <Modal
        animationType='slide'
        transparent={false}
        visible={mostrar==='registro'}
        onRequestClose={()=>setMostrar(null)}
        >
            <View style={styles.container2}>
                <Text style={styles.titulo}>Formulario de registro</Text>
                <TextInput style={styles.input} placeholder='Usuario' />
                <TextInput style={styles.input} placeholder='Contraseña' secureTextEntry={true} />
                <TextInput style={styles.input} placeholder='Confirmar Contraseña' secureTextEntry={true} />
                <TextInput style={styles.input} placeholder='Email' keyboardType='email-address' />
                <Pressable style={styles.boton} onPress={()=>setMostrar(null)}>
                    <Text style={styles.text}>Registrarse</Text>
                </Pressable>
            </View>
        </Modal>

//////////////////////////modal de alerta//////////////////////////
        <Modal
        animationType='fade'
        transparent={false}
        visible={mostrar==='alerta'}
        onRequestClose={()=>setMostrar(null)}
        >
            <View style={styles.container3}>
                <View style={styles.alerta}>
                    <Text style={styles.tituloAlerta}>¡Alerta!</Text>
                    <View style={styles.botonAlertaContainer}>
                        <Pressable style={styles.botonAlerta} onPress={()=>setMostrar(null)}>
                            <Text style={styles.text}>Aceptar</Text>
                        </Pressable>

                        <Pressable style={styles.botonAlerta} onPress={()=>setMostrar(null)}>
                            <Text style={styles.text}>Cancelar</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    container2:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f0f0f0'
    },
    container3:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.5)'
    },
    boton:{
        backgroundColor:'#6200ee',
        padding:15,
        marginBottom:10,
        borderRadius:10,
        width:'70%',
        alignItems:'center'
    },
    text:{
        color:'#fff',
        fontSize:18,
        fontWeight:500,
    },
    titulo:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:20,
    },
    input:{
        width:'80%',
        height:50,
        borderWidth:1,
        borderColor:'#000000ff',
        borderRadius:10,
        marginBottom:15,
        paddig:15,
        backgroundColor:'#ffffff',
    },
    alerta:{
        width:'80%',
        height:200,
        backgroundColor:'#ffffff',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
    },
    tituloAlerta:{
        fontSize:20,
        color:'#ff0000',
    },
    botonAlertaContainer:{
        backgroundColor:'#cb5af0ff',
        padding:10,
        borderRadius:20,
        marginRight:10,
        width:100,
        alignItems:'center',
    },
    boton2:{
        backgroundColor:'#3fed28ff',
        padding:15,
        marginBottom:10,
        borderRadius:10,
        width:'70%',
        alignItems:'center'
    },
    boton3:{
        backgroundColor:'#00d6eeff',
        padding:15,
        marginBottom:10,
        borderRadius:10,
        width:'70%',
        alignItems:'center'
    },
    
});