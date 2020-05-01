import React, { useState } from 'react'
import { View, Text } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

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
            <ResultsList title='Cheap' />
            <ResultsList title='Normal' />
            <ResultsList title='Expensive' />
        </View>
    )
}

export default SearchScreen
