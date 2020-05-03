import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ResultsDetail = ({detail}) => {
    return (
        <View style={styles.container} >
            { detail.image_url === '' ? null : <Image
                style={styles.image}
                source={{
                    uri: detail.image_url
                }}
            /> }
            <Text style={styles.name} >{detail.name}</Text>
            <Text>{detail.rating} Stars, {detail.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 15
    },
    name: {
        fontWeight: 'bold',
        marginTop: 3
    }
})

export default ResultsDetail
