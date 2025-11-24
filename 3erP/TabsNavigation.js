//home.js
import { Text, StyleSheet, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function TabsNavigation(){
    return (
      <View style={styles.container}>
        <View style={styles.iconRow}>
            <Ionicons name="home-outline" size={28} color="red"/>
            <Text style={styles.title}>Bienvenido a la pantalla principal</Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        padding:20,
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:10,
        color:'red',
    },
    iconRow:{
        flexDirection:'column',
        alignItems:'center',
    },
});


//profile.js
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.iconRow}>
                <Ionicons name='person-outline' size={28} color='green'/>
                <Text style={styles.title}>Perfil de usuarios</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        padding:20,
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
        marginLeft:10,
        color:'green',
    },
    iconRow:{
        flexDirection:'column',
        alignItems:'center',
    },
});


//settings.js
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Settings() {
    return (
        <View style={styles.container}>
            <View style={styles.iconRow}>
                <Ionicons name='person-outline' size={28} color='blue'/>
                <Text style={styles.title}>Perfil de usuarios</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        padding:20,
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
        marginLeft:10,
        color:'blue',
    },
    iconRow:{
        flexDirection:'column',
        alignItems:'center',
    },
});