import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'

import clock from '../../assets/clock.png'

import Sound from 'react-native-sound'

export default function Main() {
  let numero = '00:00:00'
  let zeroInt = '0'
  let zeroMin = '0'
  let botao = 'PLAY'
  let seconds = 0
  let minutes = 0
  let hours = 0
  let min = 0
  let minTotal = 0
  let int = 0
  let intTotal = 0

  let timer = null
  const beep = new Sound('../../assets/beep.mp3')
  


  
  
  
  return (
      <ImageBackground 
        source={clock}
        imageStyle={{resizeMode: 'center'}}
        style={styles.clock}
      >
        <View style={styles.contMin}>
          <Text style={styles.menos}>-</Text>
          <Text style={styles.zero}>{zeroMin}</Text>
          <Text style={styles.mais}>+</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.cronometro}>{numero}</Text>
        </View>

        <View style={styles.contInt}>
          <Text style={styles.menos}>-</Text>
          <Text style={styles.zero}>{zeroInt}</Text>
          <Text style={styles.mais}>+</Text>
        </View>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaText}>{botao}</Text>
          <Text style={styles.botaText}>LIMPAR</Text>
        </TouchableOpacity>
      </ImageBackground>
  )
}

const styles = StyleSheet.create({

  contMin: {
    flex: 1,
    flexDirection: 'row',
    position: "absolute",
    top: 270,
    right: 115,
    justifyContent: "center",
    alignItems: "center" 
  },

  clock: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },

  menos: {
    color: '#fff',
    fontSize: 30,
    paddingRight: 50
  },
  
  zero: {
    color: '#fff',
    fontSize: 30
  },

  mais: {
    color: '#fff',
    fontSize: 30,
    paddingLeft: 50
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
    right: 115
  },

  botao: {
    flex: 1,
    flexDirection: 'row',
    position: "absolute",
    bottom: 150,
    // right: 115
  },

  botaText: {
    color: "#000",
    paddingHorizontal: 50
  },

})