import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <View style={styles.barBackground}>
            <Feather
                name='search'
                style={styles.icon}
            />
            <TextInput
                placeholder='Search'
                style={styles.inputStyle}
                value={searchTerm}
                onChangeText={data => setSearchTerm(data)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        fontSize: 30,
        alignSelf: 'center',
        marginRight: 6
    },
    barBackground: {
        backgroundColor: 'rgb(230,230,230)',
        borderRadius: 12,
        padding: 6,
        flexDirection: 'row',
        margin: 15
    },
    inputStyle: {
        borderColor: 'black',
        borderWidth: 0,
        flex: 1,
        fontSize: 18
    }
})

export default SearchBar
