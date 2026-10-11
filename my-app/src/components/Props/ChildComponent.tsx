import { View, Text } from 'react-native'
import React from 'react'

interface Face{
    name: string,
    age: number
}

const ChildComponent = (props: Face) => {
  return (
    <View>
      <Text style={{margin: 40, fontSize: 40}}>
        hello my name is {props.name} and i'm {props.age} year old.
      </Text>
    </View>
  )
}

export default ChildComponent