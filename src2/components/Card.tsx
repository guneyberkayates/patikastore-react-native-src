import React from "react";
import {Image,Text,View, StyleSheet,Dimensions} from "react-native";

const Card = ({products}) => {
    return(
        <View style={style.container}>
            <Image style={style.item_image} source={{uri: products.imgUrl}}/>
            <Text style={style.item_header}>
                {products.title}
            </Text>
            <Text style={style.item_price}>
                {products.price}
            </Text>
        </View>
    );

};

const style = StyleSheet.create({
    container:{
        color:'gray',
        borderRadius:15,
        margin:5,
        backgroundColor:'#d3d3d3'
    },

    item_image:{
        height:Dimensions.get('window').height/4,
        width:'100%',
        borderRadius:10,
        

    },
    item_header:{
        fontWeight:'bold',
        fontSize:20,

    },
    item_price:{
        fontWeight:'bold',
        fontSize:20,
        color:'gray',
    },


});

export default Card;