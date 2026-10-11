import { View, Text } from 'react-native'
import React from 'react'

const DynamicContent = () => {
    const name = "Yuvraj"
    const multiPlay = (a: number, b: number) =>{
        return a * b;
    }
  return (
    <View>
      <Text>
        Hello my name is {name}
      </Text>
      <Text>
        2 * 2 = {multiPlay(2, 2)}
      </Text>
    </View>
  )
}

export default DynamicContent