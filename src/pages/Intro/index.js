import React from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'

import logo from '../../assets/magnusday.png'

export default function Intro({ navigation }) {
  function handleSubmit() {
    navigation.navigate('Main')
  }

  return(
    <View style={styles.container}>
      <Image source={logo}  style={{width: 250, height: 40}} />
      <Text style={styles.magno}>Uma ideia de Carlos Magno</Text>
      <View style={styles.containerBruno}>
        <Text>By <Text style={styles.bruno}>Carlos Bruno</Text></Text>
      </View>
      <TouchableOpacity style={styles.botao} onPress={handleSubmit} >
        <Text style={styles.textBotao}>Clique aqui para começar</Text>
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
    left: 35,
    fontSize: 13
  },

  containerBruno: {
    marginTop: 30    
  },

  bruno: {
    fontWeight: 'bold',
    fontSize: 16
  },

  botao: {
    marginTop: 25,
    height: 42,
    width: 200,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },

  textBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14 
  },
})