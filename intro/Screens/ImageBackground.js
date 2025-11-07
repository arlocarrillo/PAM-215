// import { useEffect } from 'react'
import { Text, StyleSheet, View, ImageBackground, Animated, Easing } from 'react-native'
import React,{useEffect} from 'react'

export default function BackroundImage(){
  const [cargando, setCargando]= React.useState(true);
  const desvanecido= new Animated.Value(1);
  useEffect(()=>{
    const timer= setTimeout(()=>{
      Animated.timing(desvanecido,{
        toValue: 0,
        duration: 800,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start(()=> setCargando(false));
    }, 2000);
    return()=> clearTimeout (timer);
  }, []);
  if(cargando){
    return(
      <Animated.View style={[styles.splashContainer, {opacity: desvanecido}]}>
        <ImageBackground
          source={require('../assets/LogoDulce.png')}
          style={styles.splashImage}
          resizeMode="contain"
        >
          <Text style={styles.splashText}>Cargando...</Text>
        </ImageBackground>
      </Animated.View>
    );
  }

  return (
      <ImageBackground
        source={require('../assets/FondoGato.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.text}>¡Bienvenido a mi App!</Text>
        </View>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  splashImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  splashText: {
    position: 'absolute',
    bottom: 60,
    fontSize: 18,
    color: '#333',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});