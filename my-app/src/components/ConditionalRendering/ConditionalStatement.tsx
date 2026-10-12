import { View, Text } from 'react-native'

interface ConditionalProps{
    isValid: boolean
}
const VaildPassword = () =>{
    return <View>
        <Text>
            Valid Password
        </Text>
    </View>
}

const InvaildPasswolrd = () =>{
    return <View>
        <Text>Invalide Password</Text>
    </View>
}

const ConditionalStatement = ({isValid}: ConditionalProps) => {
  return (
    <View>
      <Text style={{margin: 50}}>
        {
            isValid ? <VaildPassword/> : <InvaildPasswolrd/>
        }
      </Text>
    </View>
  )
}

export default ConditionalStatement