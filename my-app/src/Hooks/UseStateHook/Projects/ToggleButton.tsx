import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const ToggleButton = () => {
    const [toglle, setToglle] = useState(false);
    const [backgroundColor, setBackgounedColor] = useState('blue')

    const handleOnToggle = () => {
        setToglle(!toglle)
    }
  return (
    <View >
      <Text>{toglle ? 'ON' : 'OFF'}</Text>
      <Button title='Toggle' onPress={handleOnToggle}/>
    </View>
  )
}

export default ToggleButton