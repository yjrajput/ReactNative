import { View, Text } from 'react-native'
import React from 'react'
import Greet from '@/components/Greet'
import AboutComponent from '@/components/AboutComponent'
import ButtonComponents from '@/components/ButtonComponents'
import ImageComponent from '@/components/ImageComponent'
import CardComponent from '@/components/CardComponent'
import DynamicContent from '@/components/DynamicContent'
import InlineStyle from '@/components/styling/InlineStyle'
import InternalStyling from '@/components/styling/InternalStyling'
import ExternalStyling from '@/components/styling/ExternalStyling'

const index = () => {
  const aboutMe = {
    name: "Yuvraj Rathore",
    age: 22,
    education: "B.Tech",
    gender: "Male"
  }
  return (
    <View>

      {/* <Greet/> 
      <AboutComponent about = {aboutMe}/>
      <ButtonComponents/>

      <ImageComponent/> */}

      {/* <CardComponent/> */}

      {/* <DynamicContent/> */}
      {/* <InlineStyle/> */}
      <InternalStyling/>
      <ExternalStyling/>
    </View>
  )
}

export default index