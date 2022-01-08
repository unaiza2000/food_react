import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () =>{
    const [results, setResults] = useState([]); //for storing results of our search 
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm)=> {
        //console.log(results);
        try {
            const response = await yelp.get('/search', {
                params:{
                    limit: 50, //50 records are max limit of yelp
                    term: searchTerm,  //first term is the parameter of yelp, second term is the term we defined for searching
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
         } catch(e){
             setErrorMessage('something went wrong');
         }
    
    };

    useEffect(()=>{
        searchApi('pasta');
    }, [])

    return [searchApi, results, errorMessage];
};