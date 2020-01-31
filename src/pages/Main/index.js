import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

import clock from '../../assets/clock.png'

export default function Main() {
  
  
  
  
  return (
      <ImageBackground 
        source={clock}
        imageStyle={{resizeMode: 'center'}}
        style={styles.clock}
      >
        <View style={styles.contMin}>
          <Text style={styles.menos}>-</Text>
          <Text style={styles.zero}>0</Text>
          <Text style={styles.mais}>+</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.cronometro}>00:00:00</Text>
        </View>

        <View style={styles.contInt}>
          <Text style={styles.texto}>-</Text>
          <Text style={styles.textos}>0</Text>
          <Text style={styles.textos}>+</Text>
        </View>
      </ImageBackground>
  )
}

const styles = StyleSheet.create({

  contMin: {
    flex: 1,
    flexDirection: 'row',
    position: "absolute",
    top: 270,
    right: 163
  },

  clock: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },

  textos: {
    color: '#fff',
    fontSize: 30
  },

  menos: {
    color: '#fff',
    fontSize: 30,
    paddingRight: 40
  },
  
  zero: {
    color: '#fff',
    fontSize: 30,
    paddingRight: 
  },

  mais: {
    color: '#fff',
    fontSize: 30
  },

  container: {
    position: "absolute",
    top: 352,
    right: 85,
  },  

  cronometro: {
    fontSize: 50,
    color: "#fff",
    fontWeight: "bold"
  },

  contInt: {
    flex: 1,
    flexDirection: 'row',
    position: "absolute",
    bottom: 240,
    right: 163,
    // marginBottom: 500
  }
})