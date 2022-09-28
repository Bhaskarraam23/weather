import * as  React from "react";
import { 
    View,
    StyleSheet,
Text } from "react-native";
import { TextInput, Button} from 'react-native-paper';

const Home = ({ navigation }: any) => {
    const { useState, useRef } = React;
    const [countryName, setCountryName] = useState("")
    const [minValueError, setMinValueError] = useState(true)

    const errorRef = useRef(false)

    const handleButton = () => {
        navigation.push('Country', { countryName })
    }

    const handleChange = (value: string) => {
        if (value.length < 2) {
            setMinValueError(true)
            errorRef.current = true;
        }
        else {
            setMinValueError(false)
            errorRef.current = false;
        }
        setCountryName(value)
    }
    return (
        <>
        <Text style={styles.title}>Weather App</Text>
        <View style={styles.Container}>
        <TextInput
        label="Enter Country"
        value={countryName}
        onChangeText={handleChange}
        mode="outlined"
        />
        <Button disabled={minValueError} style={styles.button}  mode="contained" onPress={handleButton}>
        Submit
        </Button>
        </View>
        </>
    );
};
const styles = StyleSheet.create({
    title:{
        fontWeight:"bold", 
        fontSize:35, 
        alignSelf: "center", 
        color:"black"},
    button:{
        backgroundColor:"#6600ff", 
        marginTop:50, 
        borderRadius:5, 
        width:100, 
        justifyContent: "center", 
        alignSelf: "center"
    },
    Container:{
        flex: 1, 
        justifyContent: "center", 
        width: "60%", 
        alignSelf: "center"
    }
  });
export default Home;
