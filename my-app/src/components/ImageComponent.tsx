import { View, Text, Image } from 'react-native'
import React from 'react'

const ImageComponent = () => {
  return (
    <View>
      <Text>Let's explore images</Text>

      {/* internal image  */}
      <Image style={{width: 200, height: 200}} source={require('../assets/image.jpg')}/>

      {/* external source image  */}
      <Image style={{width: 200, height: 200}} source={{uri: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"}}/>
    </View>
  )
}

export default ImageComponent