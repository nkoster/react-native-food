import { useState, useEffect } from 'react'
import yelp from '../api/yelp'

export default _ => {
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
    return [searchApi, results, errorMsg]
}
