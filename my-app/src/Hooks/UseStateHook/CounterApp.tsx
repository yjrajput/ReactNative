import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const CounterApp = () => {
    const [counter, setCounter] = useState<number>(0)
  return (
    <View style={{margin: 50}}>
      <Text>
        Counter: {counter}
      </Text>
      <Button title='Increment' onPress={() => setCounter((prev) => prev + 1)}></Button>
    </View>
  )
}

export default CounterApp