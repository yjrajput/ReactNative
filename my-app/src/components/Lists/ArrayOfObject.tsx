import { View, Text, FlatList } from 'react-native'
import React from 'react'

const ArrayOfObject = () => {
    const arr = [
        {id: 1, name: "yuvraj", age: 23},
        {id: 2, name: "Jhon", age: 33},
        {id: 3, name: "Smith", age: 23}
    ]
  return (
    <View>
      <FlatList keyExtractor={(item) => item.id.toString()} data={arr} renderItem={({item}) =>{
        return <View >
            <Text>Name: {item.name}</Text>
            <Text>Age: {item.age}</Text>
        </View>
      }}/>
    </View>
  )
}

export default ArrayOfObject