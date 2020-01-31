import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import clock from '../../assets/clock.png'

export default function Main() {
  return (
    <View style={styles.container}>
      <Image source={clock}  style={styles.clock}/>
      <Text style={styles.texto}>00:00:00</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    
  },

  clock: {
    width: 370,
    height: 370,
    resizeMode: 'contain'
  },

  texto: {
    fontSize: 60,
    color: "#fff",
    fontWeight: "bold",
    position: "absolute"

  },
})