import React, { useState } from 'react'
import { View, Text } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = _ => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])
    const searchApi = async _ => {
        setTerm([])
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term,
                location: 'amsterdam'
            }
        })
        setResults(response.data.businesses)
    }
    return (
        <View>
            <SearchBar
                term={term}
                setTerm={setTerm}
                onTermSubmit={searchApi}
            />
            <Text>{results.length} found</Text>
        </View>
    )
}

export default SearchScreen
