import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Greet from '@/components/Greet'
import AboutComponent from '@/components/AboutComponent'
import ButtonComponents from '@/components/ButtonComponents'
import ImageComponent from '@/components/ImageComponent'
import CardComponent from '@/components/CardComponent'
import DynamicContent from '@/components/DynamicContent'
import InlineStyle from '@/components/styling/InlineStyle'
import InternalStyling from '@/components/styling/InternalStyling'
import ExternalStyling from '@/components/styling/ExternalStyling'
import LIstData from '@/components/Lists/LIstData'
import ArrayOfObject from '@/components/Lists/ArrayOfObject'
import ParentComponent from '@/components/Props/ParentComponent'
import ConditionalStatement from '@/components/ConditionalRendering/ConditionalStatement'
import CounterApp from '@/Hooks/UseStateHook/CounterApp'
import UpdateArray from '@/Hooks/UseStateHook/UpdateArray'
import UpdateObjects from '@/Hooks/UseStateHook/UpdateObjects'
import SharingState from '@/Hooks/UseStateHook/SharingState'

const index = () => {
  const aboutMe = {
    name: "Yuvraj Rathore",
    age: 22,
    education: "B.Tech",
    gender: "Male"
  }
  const [count, setCount] = useState<number>(0)
  const handleOnIncrement = () =>{
    setCount(count + 1)
  }
  const handleOnDecrement = () =>{
    setCount(count -1)
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
      {/* <InternalStyling/>
      <ExternalStyling/> */}
      {/* <LIstData/>
      <ArrayOfObject/> */}
      {/* <ParentComponent/> */}
      {/* <ConditionalStatement isValid = {false}/> */}
      {/* <CounterApp/>
      <UpdateArray/> */}
      <UpdateObjects/>
      <SharingState count = {count} increment = {handleOnIncrement} decrement = {handleOnDecrement}/>
    </View>
  )
}

export default index