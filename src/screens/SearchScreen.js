import React, { useState } from 'react'
import { View, Text } from 'react-native'
import SearchBar from '../components/SearchBar'

const SearchScreen = _ => {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <View>
            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={data => setSearchTerm(data)}
            />
            <Text>{searchTerm}</Text>
        </View>
    )
}

export default SearchScreen
