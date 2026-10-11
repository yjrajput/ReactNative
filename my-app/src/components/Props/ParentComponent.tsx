import { View, Text } from 'react-native'
import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    
  return (
    <View>
      <ChildComponent name = "yuvraj" age = {22}/>
    </View>
  )
}

export default ParentComponent