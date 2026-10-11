import { View, Text } from 'react-native'
import React from 'react'
import Greet from '@/components/Greet'
import AboutComponent from '@/components/AboutComponent'
import ButtonComponents from '@/components/ButtonComponents'

const index = () => {
  const aboutMe = {
    name: "Yuvraj Rathore",
    age: 22,
    education: "B.Tech",
    gender: "Male"
  }
  return (
    <View>
      <Text>
        Hello World my name is yuvraj singh rathore 
      </Text>

      <Greet/> 
      <AboutComponent about = {aboutMe}/>
      <ButtonComponents/>
    </View>
  )
}

export default index