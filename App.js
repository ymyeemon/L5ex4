import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, Image, View, FlatList, Button, TouchableOpacity, SectionList, Alert } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";
import RNPickerSelect from 'react-native-picker-select';

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
    borderWidth: 1,
  },

  title: {
    fontSize: 20,
    textAlign: 'center',
    letterSpacing: 4,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'black',
    padding:15,
    color: 'white',
    marginTop: 45,
  },

  buttonContainer: {
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 20,
  },

  textStyle: {
    fontSize: 15,
    margin: 10,
    fontWeight: 'bold',
  },

  box: {
    height: 400,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 1,
  },

  image: {
    objectFit: 'fill',
    width: 350,
    height: 200,
    borderRadius: 10,
  }
});

const App = () => {
  const datasource = [ 
    {data:[
      {name: 'Bean & Blossom', location: '26 Arab Street, Singapore 199725', image: 'https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      {name: 'Mellow Mug', location: '18 Tanjong Pagar Road, Singapore 088441', image: 'https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    ],
    icon: 'mug-hot',
    title:"Cafes", 
    backgroundColor: 'lightblue'},

    {data:[
      {name: 'Ember & Spice', location: '12 Amoy Street, Singapore 069945', image: 'https://images.pexels.com/photos/1861785/pexels-photo-1861785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      {name: 'Coast & Crust', location: '50 Boat Quay, Singapore 049839', image: 'https://images.pexels.com/photos/25440112/pexels-photo-25440112/free-photo-of-person-fingers-over-food-on-plates.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      ],
    icon: 'burger',
    title:"Restaurants", 
    backgroundColor: 'lightyellow'},
    
    {data:[
      {name: 'Dough & Drizzle', location: '72 Club Street, Singapore 069440', image: 'https://images.pexels.com/photos/4640864/pexels-photo-4640864.jpeg?auto=compress&cs=tinysrgb&w=600'},
      {name: 'Sweet Haven Bakery', location: '15 Haji Lane, Singapore 189208', image: 'https://images.pexels.com/photos/6097827/pexels-photo-6097827.jpeg?auto=compress&cs=tinysrgb&w=600'},
      ],
    icon: 'bread-slice',
    title:"Bakeries", 
    backgroundColor: 'lightgreen'},
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity>
        <View style={styles.box}>
          <Image source={{uri: item.image}} style={styles.image} />
          <Text style={styles.textStyle}>{item.name}</Text>
          <Text style={styles.minitext}>{item.location}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={() => Alert.alert("This has been added to your favourites!")}
          title="Add to Favourite" color="black"></Button>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={{backgroundColor: "#D3D3D3"}}>
      <Text style={styles.title}>WELCOME TO MEAL MAP!</Text>
      <StatusBar hidden={true} />
      <SectionList contentContainerStyle={{padding: 10, marginTop: 35, margin: 10, height: 3200}} sections={datasource} renderItem={renderItem} 
      renderSectionHeader={({section:{icon, title, backgroundColor}}) => (
        <Icon name={icon} style={[styles.headerText, {backgroundColor:backgroundColor}]}>
          <Text>{title}</Text>
        </Icon>
      )}/>
    </View>
  );
}

export default App;