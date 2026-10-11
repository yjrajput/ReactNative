import { View, Text } from 'react-native'
import React from 'react'

interface AboutFace{
    name: string,
    age: number,
    education: string,
    gender: string
}

interface AboutProps{
    about: AboutFace
}

const AboutComponent = ({about}: AboutProps) => {
  return (
    <View>
      <Text>
        my name is {about.name}
      </Text>
      <Text>
        i'm {about.age} year old
      </Text>
      <Text>
        i'm graduate in {about.education}
      </Text>
      
    </View>
  )
}

export default AboutComponent