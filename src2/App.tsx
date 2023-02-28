import React from "react";
import { SafeAreaView,Text,FlatList,StyleSheet} from "react-native";
import store from './store.json';
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";


function App() {

    const renderProducts = ({item}) => <Card products={item} />    
    return(
        <SafeAreaView>
             <Text style={style.header}>
                PATIKASTORE
            </Text>
            <SearchBar />
            <FlatList   data={store}
                renderItem={renderProducts} />
                
              
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    header:{
        fontWeight:'bold',
        fontSize:30,
        color:'purple',

    },


});

export default App;