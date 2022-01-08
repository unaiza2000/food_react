import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';   //for using navigation w/o passsing prop from search screen

const ResultList = ({title, results, navigation}) => {
    if(!results.length){
        return null;
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator ={false}
                data={results}
                keyExtractor={(result) => result.id }  //the results from yelp have a parameter as id
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity  onPress={() => navigation.navigate('ResultsShow', {id: item.id})} > 
                            <ResultsDetail  result={item}/>
                        </TouchableOpacity>
                        //paassing a 2nd argument in navigate to pass the id of the current item
                    )
                 }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container:{
        marginBottom:10
    }
});

export default withNavigation( ResultList);