import { View, Text, FlatList } from 'react-native'
import React from 'react'

const LIstData = () => {
    const fruits = ["Apple", "Mango", "Banana", "Graps"]
  return (
    <View>
      <FlatList keyExtractor={(item) => item} data={fruits} renderItem={({item}) =>{
        return <Text>{item}</Text>
      }}/>
    </View>
  )
}

export default LIstData