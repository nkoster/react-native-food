import React, { useState } from 'react'
import { View, Text } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = _ => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])
    const [errorMsg, setErrorMsg] = useState('')
    const searchApi = async _ => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term,
                    location: 'amsterdam'
                }
            })
            setResults(response.data.businesses)
            setErrorMsg('')
        } catch(err) {
            setErrorMsg('Something went wrong')
        }
    }
    return (
        <View>
            <SearchBar
                term={term}
                setTerm={setTerm}
                onTermSubmit={searchApi}
            />
            <Text>{errorMsg === '' ? `${results.length} found` : errorMsg}</Text>
        </View>
    )
}

export default SearchScreen
