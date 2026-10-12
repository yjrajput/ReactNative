import { View, Text, FlatList, Button } from 'react-native'
import React, { useState } from 'react'

const UpdateArray = () => {
    const [friend, setFriend] = useState(["Alex", "Jhon", "Smith"]);

    const handleOnAdd = () =>{
        setFriend([...friend, 'Yuvraj Rathore'])
    }
    const handleOnUpdate = () =>{
        setFriend(friend.map((f) => f === 'Alex' ? 'Alex Sina' : f))
    }
    const handleOnRemove = () =>{
        setFriend(friend.filter((f) => f !== 'Smith'))
    }
  return (
    <View>
      <Text>
        {
            <FlatList keyExtractor={(item) => item} data={friend} renderItem={({item}) =>{
                return <Text>{item}</Text>
            }}/>
        }
      </Text>

      <Button title='Add friend' onPress={handleOnAdd}/>
      <Button title='Update friend' onPress={handleOnUpdate}/>
      <Button title='Remove friend' onPress={handleOnRemove}/>
    </View>
  )
}

export default UpdateArray