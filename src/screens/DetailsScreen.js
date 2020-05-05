import React, { useState, useEffect } from 'react'
import { Text, View, FlatList, Image } from 'react-native'
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
    if (!result) return null
    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({item}) => {
                    return (
                        <Image
                            style={styles.image}
                            source={{ uri: item }}
                        />
                    )
                }}
            />
        </View>
    )
}

const styles = {
    image: {
        width: 300,
        height: 200
    }
}

export default DetailsScreen
