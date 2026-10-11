import { View, Text } from 'react-native'
import React from 'react'

const InlineStyle = () => {
  return (
    <View>
      <View style={{width: 100, height: 100, backgroundColor: 'red', margin: 20}}/>
      <View style={{width: 100, height: 100, backgroundColor: 'blue', margin: 20}}/>
      <View style={{width: 100, height: 100, backgroundColor: 'yellow', margin: 20}}/>
      <View style={{width: 100, height: 100, backgroundColor: 'pink', margin: 20}}/>
    </View>
  )
}

export default InlineStyle