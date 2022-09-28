import axios from "axios";
import React from "react";
import { Image, Text, SafeAreaView, StyleSheet } from "react-native";

const Weather = ({ route }: any) => {

    const { capital } = route.params
    const { useLayoutEffect, useState } = React;
    const [countryDetail, setCountryDetail] = useState({
        "current": { "weather_icons": ["https://"], "temperature": "", "precip": "", "wind_speed": "" }
    })

    useLayoutEffect(() => {
        axios.get(`http://api.weatherstack.com/current?access_key=2110ea1bf55761a18574adb318c0e27b&query=${capital}`)
            .then((response) => {
                setCountryDetail(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Weather Details</Text>
        <Image style={styles.icon} source={{ uri: countryDetail?.current.weather_icons[0] }} />
        <Text style={{fontSize:20,padding:15}}>Temperature : {countryDetail?.current.temperature}°C</Text>
        <Text style={{fontSize:20,padding:15}}>Precipitation : {countryDetail?.current.precip}%</Text>
        <Text style={{fontSize:20,padding:15}}>Wind Speed : {countryDetail?.current.wind_speed} kmph</Text>
    </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container:{
        flex: 1, 
        width: "70%", 
        alignSelf: "center"
    },
    title:{
        fontWeight:"bold", 
        fontSize:30, 
        alignSelf: "center",
        padding:5, 
        color:"black"
    },
    icon:{
        width: 130,
        height: 130,
        marginTop:150,
        marginLeft:15,
        alignSelf: "center",
    },

});

export default Weather;
