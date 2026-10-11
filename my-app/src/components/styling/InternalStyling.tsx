import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const InternalStyling = () => {
  return (
    <View>
      <Text style={style.textStyle}>InternalStyling</Text>
    </View>
  )
}
const style = StyleSheet.create({
    textStyle:{
        color: 'red',
        fontSize: 40,
        fontFamily: "900"
    }
})

export default InternalStyling