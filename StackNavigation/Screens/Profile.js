import { Text, StyleSheet, View } from 'react-native'

export default function Profile({navigation}) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Pantalla de Perfil</Text>
        <Pressable style={[styles.button, styles.buttonSettings]} onPress={()=>navigation.navigate('Settings')}>
            <Text style={styles.text}>Ir a Configuración</Text>
        </Pressable>

        <Pressable style={[styles.button, styles.buttonHome]} onPress={()=>navigation.navigate('Home')}>
            <Text style={styles.text}>Volver a Home</Text>
        </Pressable>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 22,
        marginBottom: 40,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginBottom:20,
        width:'80%',
        alignItems:'center',
    },
    buttonSettings: {
        backgroundColor: '#FF8800',
    },
    buttonHome: {
        backgroundColor: '#00CC66',
    }, 
    text:{
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    }
});