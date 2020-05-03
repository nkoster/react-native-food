import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ResultsDetail from './ResultsDetail'

const ResultsList = ({title, results}) => {
    return (
        <View>
            <Text style={styles.title} >{title}</Text>
            <FlatList
                horizontal // same as horizonatl={true}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({item}) => {
                return <ResultsDetail detail={item} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10
    }
})

export default ResultsList
