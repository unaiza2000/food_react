import React from 'react';
import { TextInput, View, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';
//importing feather library from expo/vector-icons

const SearchBar =({term, onTermChange, onTermSubmit}) => {
    return(
        <View style={styles.background}>
            <Feather name='search' style={styles.iconStyle}/>
            <TextInput 
                autoCorrect={false}
                placeholder='Search' 
                style={styles.inputStyle}
                value={term}
                onChangeText={onTermChange}  //passing reference of a function
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: "red",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 15,
        marginBottom:10
    },
    inputStyle:{
        flex: 1,
        fontSize: 16
    
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;