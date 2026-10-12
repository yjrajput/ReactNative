import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const UpdateObjects = () => {
    const [movie, setMovie] = useState({
        movieName: 'Superman',
        reting: 8
    })

    const handleOnUpdate = () =>{
        setMovie({...movie, reting: 10})
    }
  return (
    <View>
      <Text>
        Movie Name: {movie.movieName}
      </Text>
      <Text>
        Movie Rating: {movie.reting}
      </Text>

      <Button title='Update Rating' onPress={handleOnUpdate}/>
    </View>
  )
}

export default UpdateObjects