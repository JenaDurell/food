import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')
  
    const searchApi = async (searchTerm) => {
      try {
        const response = await yelp.get("/search", {
          params: {
            limit: 50,
            term: searchTerm,
            location: "topsail beach",
          },
        });
        setResults(response.data.businesses);
      } catch (err) {
        setErrorMessage('Oops! Something\'s fucked up')
      }
    };
  
    useEffect (() => {
        searchApi('vegetarian')
    }, [])

    return [searchApi, results, errorMessage]

}