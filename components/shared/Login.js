import { View, Text, Button } from 'react-native'
import React from 'react'

const Login = ({navigation}) => {
  return (
    <View>
      <Text>Login</Text>
      <Button title="Go to Home" onPress={() => navigation.replace('HomeDrawer')} />
    </View>
  )
}

export default Login