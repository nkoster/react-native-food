import React from 'react'
import { Text, View } from 'react-native'

const DetailsScreen = ({navigation}) => {
    const id = navigation.getParam('id')
    console.log('id', id)
    return (
        <View>
            <Text>Details Screen</Text>
        </View>
    )
}

export default DetailsScreen
