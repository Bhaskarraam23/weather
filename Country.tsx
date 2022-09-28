import * as React from "react";
import {Image, Text, View, SafeAreaView,StyleSheet } from "react-native";
import {Button} from 'react-native-paper';
import axios from "axios";

const Country = ({ route, navigation }: any) => {
    const { countryName } = route.params
    const { useLayoutEffect, useState } = React;
    const [error, seterror] = useState(false);
    const [countryDetail, setCountryDetail] = useState({
        "flags": { "png": "https://" }, "capital": "", "latlng": [0, 0], "population": ""
    })

    useLayoutEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
            .then((response) => {
                setCountryDetail(response.data[0])
            })
            .catch((error) => {
                seterror(true)
            })
    }, [])
    return (
        <SafeAreaView style={styles.Container}>
        <Text style={styles.title}>Country Details</Text>
        <Image style={styles.flag} source={{ uri: countryDetail.flags.png }} />
        <Text style={{fontSize:20,padding:15,marginTop:20,}}>Capital : {countryDetail?.capital}</Text>
        <Text style={{fontSize:20,padding:15}}>Country's Population : {countryDetail?.population}</Text>
        <Text style={{fontSize:20,padding:15}}>Latitude : {countryDetail?.latlng[0]} deg</Text>
        <Text style={{fontSize:20,padding:15}}>Longitude : {countryDetail?.latlng[1]} deg</Text>
        <Button style={styles.button} mode="contained" onPress={() => { navigation.push('Weather', { capital: countryDetail.capital }) }}>
        Capital Weather
        </Button>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    Container:{
        flex: 1, 
        width: "90%", 
        alignSelf: "center"
    },
    title:{
        fontWeight:"bold", 
        fontSize:30, 
        alignSelf: "center", 
        color:"black"
        
    },
    flag:{
        width: 250, 
        height: 250,
        marginLeft:15,
        marginTop:40,
        alignSelf: "center"
    },
    button:{
        backgroundColor:"#6600ff", 
        marginTop:45, 
        borderRadius:5, 
        width:300,
        alignSelf: "center"
    }


});
export default Country;
