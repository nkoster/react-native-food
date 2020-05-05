import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import yelp from '../api/yelp'

const DetailsScreen = ({navigation}) => {
    const [ result, getResult ] = useState(null)
    const id = navigation.getParam('id')
    console.log(result)
    const getDetails = async id => {
        const response = await yelp.get(`/${id}`)
        getResult(response.data)
    }
    useEffect(_ => { getDetails(id) }, []) // to run only once
    return (
        <View>
            <Text>Details Screen</Text>
        </View>
    )
}

export default DetailsScreen
