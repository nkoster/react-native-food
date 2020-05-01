import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'

const SearchScreen = _ => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMsg] = useResults()
    return (
        <View>
            <SearchBar
                term={term}
                setTerm={setTerm}
                onTermSubmit={_ => searchApi(term)}
            />
            <Text>{errorMsg === '' ? `${results.length} found` : errorMsg}</Text>
        </View>
    )
}

export default SearchScreen
