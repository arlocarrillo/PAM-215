import { Text, StyleSheet, View } from 'react-native'
import React from 'react';

export default function detail() {
    return (
      <View style={styles.container}>
        <Text>Detalles del usuario</Text>
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
});