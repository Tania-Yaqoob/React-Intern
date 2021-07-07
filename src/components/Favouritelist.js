import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

export const Favouritelist = () => {
  const { favouritelist } = useContext(GlobalContext);
  const itemView = ({ item }) => {
    return (
      <TouchableOpacity style={styles.card}>
        <Image style={styles.cardImage} source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }}></Image>
        <Text style={styles.cardText}>{item.title}</Text>
      </TouchableOpacity>

    )
  }
  const itmeSeparatorView = () => {
    return (
      <View style={{ height: 0.5, width: '100%', backgroundColor: '#c8c8c8' }} />
    )
  }
  return (
    
        <View>
        <FlatList
          data={favouritelist}
          keyExtractor={(item, index) => index.toString()}
          itmeSeparatorComponent={itmeSeparatorView}
          renderItem={itemView} />
      </View>
      
             
         
  );
};
const styles = StyleSheet.create({
  input: {
    height: 60,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#000000',
    backgroundColor: '#FFFFFF'
  },
  cardText: {
    fontSize: 16,
    padding: 10
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 10,
    marginLeft: '2%',
    width: '96%',
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3
    }
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover'
  }
});