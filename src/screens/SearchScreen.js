import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = _ => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])
    const [errorMsg, setErrorMsg] = useState('')
    const searchApi = async searchTerm => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'amsterdam'
                }
            })
            setResults(response.data.businesses)
            setErrorMsg('')
        } catch(err) {
            setErrorMsg('Something went wrong')
        }
    }
    useEffect(_ => {
        searchApi('pasta')
    }, [])
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
