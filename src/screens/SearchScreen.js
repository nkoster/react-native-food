import React, { useState } from 'react'
import { View, Text } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = _ => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMsg] = useResults()
    results.forEach(result => console.log(result.price))
    const filterByPrice = price => results.filter(result => result.price === price)
    return (
        <View>
            <SearchBar
                term={term}
                setTerm={setTerm}
                onTermSubmit={_ => searchApi(term)}
            />
            <Text>{errorMsg === '' ? `${results.length} found` : errorMsg}</Text>
            <ResultsList
                results={filterByPrice('€')}
                title='Cheap'
            />
            <ResultsList
                results={filterByPrice('€€')}
                title='Normal'
            />
            <ResultsList
                results={filterByPrice('€€€')}
                title='Expensive'
            />
        </View>
    )
}

export default SearchScreen
