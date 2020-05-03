import React, { useState } from 'react'
import { Text, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = _ => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMsg] = useResults()
    const filterByPrice = (p1, p2, p3) => results.filter(
        r => r.price === p1 || r.price === p2 || r.price === p3
    )
    return (
        <>
            <SearchBar
                term={term}
                setTerm={setTerm}
                onTermSubmit={_ => searchApi(term)}
            />
            {errorMsg === '' ? null : <Text>{errorMsg}</Text>}
            <ScrollView>
                <ResultsList
                    results={filterByPrice('€', '$', '£')}
                    title='Cheap'
                />
                <ResultsList
                    results={filterByPrice('€€', '$$', '££')}
                    title='Normal'
                />
                <ResultsList
                    results={filterByPrice('€€€', '$$$', '£££')}
                    title='Expensive'
                />
            </ScrollView>
        </>
    )
}

export default SearchScreen
