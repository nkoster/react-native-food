import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import ResultsDetail from './ResultsDetail'

const ResultsList = ({title, results, navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title} >{title}</Text>
            <FlatList
                horizontal // same as horizonatl={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({item}) => {
                return (
                    <TouchableOpacity onPress={_ => navigation.navigate('DetailsScreen')}>
                        <ResultsDetail detail={item} />
                    </TouchableOpacity>
                )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
})

export default ResultsList
