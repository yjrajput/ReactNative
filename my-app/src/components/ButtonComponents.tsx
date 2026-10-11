import { View, Text, Button, Pressable } from 'react-native'
import React from 'react'

const ButtonComponents = () => {
  return (
    <View>
      <Text>Let's explore the button in react native</Text>
      <Button title = "Learn More" color='teal' onPress={() => console.warn("Hello Wolrd")}/>

        <Pressable onPress={() => alert("Pressed")}>
            <Text>Press me</Text>
        </Pressable>

        <Pressable  onPressIn={() => alert("PressIN")}>
            <Text style = {{color: "teal"}}>PressIn</Text>
        </Pressable>
        
        <Pressable  onPressOut={() => alert("PressOut")}>
            <Text style = {{color: "blue"}}>PressOut</Text>
        </Pressable>

        <Pressable  onLongPress={() => alert("PressLong")}>
            <Text style = {{color: "red"}}>PressIn</Text>
        </Pressable>
    </View>
  )
}

export default ButtonComponents