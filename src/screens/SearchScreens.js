import React, {useState} from 'react';
import { Text, View, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    
    const filterResultByPrice = (price)=> {
        //price === '$' || "$$" || "$$$"
        return results.filter(result => {
            return result.price === price;

            //result fn is returning something.
            //result.price,  is a fn result and the parameter price($, $$, $$$) that is passes as argument
            // result.price === price; is comparing our passed argument with the price returned by yelp api 
        });
    };

    return(
        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
                />
            {errorMessage? <Text>{errorMessage}</Text>: null}
            <Text>we have found {results.length} results</Text>
            <ScrollView>
                <ResultList 
                    title ="Cost Effective"  
                    results = {filterResultByPrice('$')}
                     />
                <ResultList 
                    title ="Bit Pricier" 
                    results = {filterResultByPrice('$$')}
                    />
                <ResultList 
                    title ="Big Spender" 
                    results = {filterResultByPrice('$$$')}
                    />
            </ScrollView>
            
    
        </>
    )
}

const styles = StyleSheet.create({});

export default SearchScreen;