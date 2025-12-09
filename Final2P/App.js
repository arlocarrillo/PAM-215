import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { SafeAreaView, Image, StyleSheet, Text, View,ScrollView, Alert, ImageBackground, Button } from 'react-native';

export default function App() {
  const [loadingSplash, setLoadingSplash] = useState(true);
  useEffect(()=>{
    const timer = setTimeout(() => setLoadingSplash(false),2200);
    return () => clearTimeout(timer);
  },[]);

  if(loadingSplash){
    return(
      <SafeAreaView>
        <Image source={require("./assets/new_splash.jpg")}/>
        <View style={styles.splashOver}>
          <Text style={styles.splashText}>WeatherUPQ</Text>
        </View>
      </SafeAreaView>
    )
  }

  const mostrarTokyo=()=>{
    Alert.alert("Tokyo: 23°C con humedad de 40%");
    alert("Tokyo: 22°C con humedad de 40%")
  }

  const mostrarChicago=()=>{
    Alert.alert("Chicago: 10°C con humedad de 40%");
    alert("Chicago: 10°C con humedad de 40%")
  }

  const mostrarNepal=()=>{
    Alert.alert("Nepal: 23°C con humedad de 40%");
    alert("Nepal: 27°C con humedad de 27%")
  }
  const mostrarWash=()=>{
    Alert.alert("Washington: 23°C con humedad de 40%");
    alert("Washington: 9°C con humedad de 83%")
  }
  
  const mostrarCDMX=()=>{
    Alert.alert("CDMX: 23°C con humedad de 40%");
    alert("CDMX: 10°C con humedad de 70%")
  }

  const mostrarGuadalajara=()=>{
    Alert.alert("Guadalajara: 23°C con humedad de 40%");
    alert("Guadalajara: 20°C con humedad de 30%")
  }

  const fecha = () =>{
    const now = new Date();
    return now.toLocaleDateString("es-ES",{
      weekday:'long',
      day:'2-digit',
      month:'long',
      year:'numeric'
    });
  };
  return (
    <ImageBackground
    source={require("./assets/hamsterArlo.png")}
    resizeMode='cover'
    style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Clima Actual</Text>
        <Text style={styles.fechas}>{fecha()}</Text>
      </View>

      <View style={{flex:1}}>
        <ScrollView style={styles.scroll} contentContainerStyle={{paddingBottom:40, paddingTop:20}}>
          <View style={styles.containerScroll}>
            <Text style={styles.containerTitle}>Tokyo</Text>
            <Text style={styles.detalles}>Temperatura: 22°C</Text>
            <Text style={styles.detalles}>Nublado</Text>
            <Button title='Ver detalles' onPress={mostrarTokyo}/>
          </View>

          <View style={styles.containerScroll}>
            <Text style={styles.containerTitle}>Chicago</Text>
            <Text style={styles.detalles}>Temperatura: 10°C</Text>
            <Text style={styles.detalles}>Despejado</Text>
            <Button title='Ver detalles' onPress={mostrarChicago}/>
          </View>

          <View style={styles.containerScroll}>
            <Text style={styles.containerTitle}>Nepal</Text>
            <Text style={styles.detalles}>Temperatura: 27°C</Text>
            <Text style={styles.detalles}>Nublado</Text>
            <Button title='Ver detalles' onPress={mostrarNepal}/>
          </View>

          <View style={styles.containerScroll}>
            <Text style={styles.containerTitle}>Washington DC</Text>
            <Text style={styles.detalles}>Temperatura: 9°C</Text>
            <Text style={styles.detalles}>Tormenta eléctrica</Text>
            <Button title='Ver detalles' onPress={mostrarWash}/>
          </View>

          <View style={styles.containerScroll}>
            <Text style={styles.containerTitle}>CDMX</Text>
            <Text style={styles.detalles}>Temperatura: 10°C</Text>
            <Text style={styles.detalles}>Lluvia ligera</Text>
            <Button title='Ver detalles' onPress={mostrarCDMX}/>
          </View>

          <View style={styles.containerScroll}>
            <Text style={styles.containerTitle}>Guadalajara</Text>
            <Text style={styles.detalles}>Temperatura: 20°C</Text>
            <Text style={styles.detalles}>Despejado</Text>
            <Button title='Ver detalles' onPress={mostrarGuadalajara}/>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll:{
    flex:1,
  },
  containerScroll:{
    padding:14,
    borderRadius:12,
    marginBottom:18,
    borderWidth:1,
  },
  containerTitle:{
    fontSize:20,
    fontWeight:"700",
    flex:1,
  },
  header:{
    flexDirection:'column',
    alignItems:"center",
    marginBottom:10,
  },
  title:{
    fontWeight:"700",
    fontSize:27,
  },
  fechas:{
    fontWeight:"550",
    fontSize:18,
  },
  detalles:{
    fontSize:15,
    fontWeight:"400"
  },
  splashOver:{
    position:"absolute",
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:20,
  },
  splashText:{
    color:"#fff",
    fontSize:30,
    fontWeight:"700",
    textAlign:'center',
    padding:12,
    borderRadius: 8,
  },
});
