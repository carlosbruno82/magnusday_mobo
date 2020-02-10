import React from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'

import logo from '../../assets/magnusday.png'

export default function Intro() {
  return(
    <View style={styles.container}>
      <Image source={logo}  style={{width: 250, height: 40}} />
      <Text style={styles.magno}>Uma ideia de Carlos Magno</Text>
      <View style={styles.containerBruno}>
        <Text>By <Text style={styles.bruno}>Carlos Bruno</Text></Text>
      </View>
      <TouchableOpacity>
        <Text>Clique aqui para começar</Text>
      </TouchableOpacity>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center" 
  },

  magno: {
    marginTop: 6,
    left: 35
  },

  containerBruno: {
    marginTop: 15,
    
  },

  bruno: {
    fontWeight: 'bold'
  },
})