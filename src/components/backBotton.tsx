import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { s, vs } from 'react-native-size-matters'

const backBotton = () => {
  return (
    <View>
      <Text>backBotton</Text>
    </View>
  )
}

export default backBotton

const styles = StyleSheet.create({
    container: {
        width: s(375),
        height: vs(812),
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 25,
        backgroundColor: '#f2f4f7',
    }
})