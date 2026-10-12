import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

interface SharingProps{
    count: number,
    increment: () => {},
    decrement: () =>{}
}

const SharingState = ({count, increment, decrement}: SharingProps) => {
    
  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title='Increment' onPress={increment}/>
      <Button title='Decrement' onPress={decrement}/>
    </View>
  )
}

export default SharingState