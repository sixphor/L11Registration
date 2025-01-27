import React,{useState, useEffect} from 'react';
import {StatusBar, Button, FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#ffd2d2',
    },
    listStyle: {
        backgroundColor: '#fffdfd',
        borderRadius: 10,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 10,
    },
    textStyle: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
    },

    textStyleBold: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5
    },
    buttonStyle: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 10,
        margin: 20,
        alignItems: 'center',
    },
    buttonTextStyle: {
        color: '#fff',
        fontSize: 18,
    },
});

const Home = ({navigation}) => {
  const [myData, setMyData] = useState([]);

    useEffect(() => {
        fetch("https://7a7a48c007c4499fb5236246afbb92a7.api.mockbin.io/")
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                setMyData(myJson);
            })
    }, []);

  const renderItem = ({item, index, section}) => {
    return (
    <View style={styles.listStyle}>
        <Text style={styles.textStyleBold}>
            {item.username}
        </Text>
        <Text style={styles.textStyle}>Email: {item.email}</Text>
        <Text style={styles.textStyle}>Phone Number: {item.phone}</Text>
    </View>
    );
  };

   return (
    <View style={styles.container}>
      <StatusBar/>
        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate("Add", { datastr: JSON.stringify(myData) })}
        >
            <Text style={styles.buttonTextStyle}>Register</Text>
        </TouchableOpacity>
      <FlatList data={myData} renderItem={renderItem}/>
    </View>
  );
};

export default Home;
