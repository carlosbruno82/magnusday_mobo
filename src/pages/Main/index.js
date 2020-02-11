import React, {Component} from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import { Audio } from 'expo-av'

import clock from '../../assets/clock.png'

const beep = new Audio.Sound()
const beepLoop = new Audio.Sound()

class Cronometro extends Component{
  
  async componentDidMount() {
    await beepLoop.unloadAsync()
    await beep.unloadAsync()

    await beepLoop.loadAsync(require('../../assets/beep.mp3'))
    await beep.loadAsync(require('../../assets/beep.mp3'))
  }

  constructor(props){
      super(props)
      this.state = {
          numero: '00:00:00',
          h2: 0,
          h3: 0,
          botao: 'PLAY',
          seconds: 0,
          minutes: 0,
          hours: 0,
          min: 0,
          minInter: 0,
          total: 0,
          totalInter: 0
      }

      this.timer = null
      
      this.startCounting = this.startCounting.bind(this)
      this.play = this.play.bind(this)
      this.limpar = this.limpar.bind(this)
      this.menos = this.menos.bind(this)
      this.mais = this.mais.bind(this)
      this.menosInter = this.menosInter.bind(this)
      this.maisInter = this.maisInter.bind(this)
      this.playLoopBeep = this.playLoopBeep.bind(this)
      this.playBeep = this.playBeep.bind(this)
      this.stopBeep = this.stopBeep.bind(this)
  }

  startCounting = () => {
      const state = this.state
      state.seconds++;
      state.total--;
      state.totalInter--;
            if (state.seconds >= 60) {
                state.seconds = 0;
                state.minutes++;
                if (state.minutes >= 60) {
                    state.minutes = 0;
                    state.hours++;
                }
            }

            if(state.total == 0){
                clearInterval(this.timer)
                this.timer = null
                state.botao = 'PLAY'
                state.min = 0
                state.minInter = 0
                state.h2 = state.min
                state.h3 = state.minInter
                state.total = 0
                state.totalInter = 0
                this.playLoopBeep()
            } 

            if(state.totalInter == 0){
              this.playBeep()
              state.totalInter = state.minInter * 60
            } 

            state.numero = `${state.hours ? (state.hours > 9 ? state.hours : "0" + state.hours) : "00"}:${state.minutes ? (state.minutes > 9 ? state.minutes : "0" + state.minutes) : "00"}:${state.seconds > 9 ? state.seconds : "0" + state.seconds}`
            this.setState(state)
  } 

  play() {
      const state = this.state

      if(this.timer !== null) {
          clearInterval(this.timer)
          this.timer = null
          state.botao = 'PLAY'
      }   else {
          this.timer = setInterval(this.startCounting, 1000)
          state.botao = 'PAUSE'
          this.stopBeep()
      }
      this.setState(state)
  }   

  limpar = () => {
      const state = this.state
      
      clearInterval(this.timer) 
      this.timer = null                 
      state.botao = 'PLAY'
      state.numero = '00:00:00'
      state.seconds = 0
      state.minutes = 0
      state.hours = 0
      state.min = 0
      state.total = 0
      state.h2 = state.min
      state.minInter = 0
      state.totalInter = 0
      state.h3 = state.minInter
      this.stopBeep()
      this.setState(state)
  }

  menos = () => {
      const state = this.state
      if(state.min < 0){
          state.min = 0
          state.h2 = state.min
      } else if(state.min > 0){
          state.min--
          state.total -= 60
          state.h2 = state.min
      }
      this.setState(state)
  }

  mais = () => {
      const state = this.state
      state.min++
      state.total += 60
      state.h2 = state.min
      this.setState(state)
  }

  menosInter = () => {
      const state = this.state
      if(state.minInter < 0){
          state.minInter = 0
          state.h3 = state.minInter
      } else if(state.minInter > 0){
          state.minInter--
          state.totalInter -= 60
          state.h3 = state.minInter
      }
      this.setState(state)
  }

  maisInter = () => {
      const state = this.state
      state.minInter++
      state.totalInter += 60
      state.h3 = state.minInter
      this.setState(state)
  }

  playBeep = async () => {
    try {
      await beep.unloadAsync()
      await beep.loadAsync(require('../../assets/beep.mp3'))
      await beep.playAsync()
      await beep.setIsLoopingAsync(false)

    } catch (error) {
      console.log(error)
    }
  }

  playLoopBeep = async () => {  
    try {
      await beepLoop.unloadAsync()
      await beepLoop.loadAsync(require('../../assets/beep.mp3'))
      await beepLoop.playAsync()
      await beepLoop.setIsLoopingAsync(true)

    } catch (error) {
      console.log(error)
    }
  }
  
  stopBeep = async () => {
    try {
      await beepLoop.unloadAsync()
      await beepLoop.loadAsync(require('../../assets/beep.mp3'))

      await beep.unloadAsync()
      await beep.loadAsync(require('../../assets/beep.mp3'))
    
    } catch (error) {
      console.log(error)
    }
  }

  render(){

    return (
      <ImageBackground 
        source={clock}
        imageStyle={{resizeMode: 'center'}}
        style={styles.clock}
      >
        <View style={styles.contMin}>
          <TouchableOpacity onPress={this.menos}>
            <Text style={styles.menos}>-</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.zero}>{this.state.h2}</Text>
          </View>
          <TouchableOpacity onPress={this.mais}>
            <Text style={styles.mais}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Text style={styles.cronometro}>{this.state.numero}</Text>
        </View>
        
        <View style={styles.contInt}>
          <TouchableOpacity onPress={this.menosInter}>
            <Text style={styles.menosInt}>-</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.zeroInt}>{this.state.h3}</Text>
          </View>
          <TouchableOpacity onPress={this.maisInter}>
            <Text style={styles.maisInt}>+</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.botao}>
          <TouchableOpacity  onPress={this.play}>
            < Text style={styles.botaText}>{this.state.botao}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.limpar}>
            <Text style={styles.botaText}>LIMPAR</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
}

export default Cronometro;

const styles = StyleSheet.create({
  clock: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  
  contMin: {
    flex: 1,
    flexDirection: 'row',
    top: 135,
    marginRight: -10,
    justifyContent: "center",
    alignItems: "center",
  },
  
  menos: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 60
  },
  
  zero: {
    color: '#fff',
    fontSize: 40,
    paddingHorizontal: 40
  },
  
  mais: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 40
  },

  container: {
    marginTop: 50,
    marginLeft: 20
  },  

  cronometro: {
    fontSize: 50,
    color: "#fff",
    fontWeight: "bold"
  },
  
  contInt: {
    flex: 1,
    flexDirection: 'row',
    bottom: 80,
    marginRight: -10,
    justifyContent: "center",
    alignItems: "center",
  },
  
  menosInt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 60
  },
  
  zeroInt: {
    color: '#fff',
    fontSize: 40,
    paddingHorizontal: 40
  },
  
  maisInt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 40
  },


  botao: {
    flexDirection: 'row',
    bottom: 115
  },

  botaText: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#000",
    paddingHorizontal: 40
  },

})