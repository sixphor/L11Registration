import React,{useState} from 'react';
import {StatusBar, View, Button, Text, TextInput, Alert, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#ffd2d2",
        flex: 1
    },

    title: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 10
    },

    container: {
        marginHorizontal: 20,
        marginBottom: 15
    },

    textLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 15
    },

    textInput: {
        borderWidth: 0,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        padding: 20,
    },

    buttonStyle: {
        backgroundColor: '#4CAF50',
        borderRadius: 10,
        margin: 20,
        alignItems: 'center',
    },
    buttonTextStyle: {
        color: '#fff',
        fontSize: 18,
    },
})

const Add = ({navigation, route}) => {
  const[name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <View style={styles.main}>
      <StatusBar/>
        <Text style={styles.title}>Registration</Text>
        <View style={styles.container}>
            <Text style={styles.textLabel}>Username: </Text>
            <TextInput style={styles.textInput} onChangeText={(text)=>setName(text)} placeholder={"Enter Username"}/>
            <Text style={styles.textLabel}>Email: </Text>
            <TextInput style={styles.textInput} onChangeText={(text)=>setEmail(text)} placeholder={"Enter Email"}/>
            <Text style={styles.textLabel}>Phone Number: </Text>
            <TextInput style={styles.textInput} onChangeText={(text)=>setPhone(text)} placeholder={"Enter Phone Number"}/>
        </View>
        <View style={styles.buttonStyle}>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => {
                    let mydata = JSON.parse(route.params.datastr);
                    let item = { name: name, email: email, phone: phone };
                    mydata.push(item);
                    fetch("https://7a7a48c007c4499fb5236246afbb92a7.api.mockbin.io/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "genjag3gr"
                        },
                        body: JSON.stringify(mydata)
                    })
                        .then((response) => {
                            navigation.navigate("Home");
                        });
                }}
            >
                <Text style={styles.buttonTextStyle}>Sign Up</Text>
            </TouchableOpacity>
        </View>

    </View>
  );
};

export default Add;
