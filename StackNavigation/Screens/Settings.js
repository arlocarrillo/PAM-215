import { Text, StyleSheet, View, Pressable } from 'react-native'

export default function Settings({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pantalla de Configuración</Text>
            <Pressable style={[styles.button, styles.buttonProfile]} onPress={()=>navigation.navigate('Profile')}>
                <Text style={styles.text}>Ir a Perfil</Text>
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
    buttonProfile: {
        backgroundColor: '#0088FF',
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