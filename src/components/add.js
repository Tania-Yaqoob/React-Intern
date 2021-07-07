import React, { useState, useEffect,useContext } from 'react';
import { Text, View, TextInput, StyleSheet, FlatList, TouchableOpacity, Image,Button } from 'react-native';
import { GlobalContext } from "../context/GlobalState";

const Add = () => {
  const [filterdData, setFilterdData] = useState([]);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const {
    addMovieToFavouritelist,
  } = useContext(GlobalContext);

  useEffect(() => {
    fetchMovie();
    return () => {

    }
  }, [])
  const fetchMovie = () => {
  
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=29d62274e14964e04e0a98c5c473c7b1&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setFilterdData(data.results);
        setResults(data.results);
      }).catch((error) => {
        console.error(error);
      })
  }

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=29d62274e14964e04e0a98c5c473c7b1&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        setFilterdData(data.results);
        setQuery(data.results);
      }).catch((error) => {
        console.error(error);
      })
  };
  const itemView = ({ item }) => {
    return (
      <TouchableOpacity style={styles.card}>
        <Image style={styles.cardImage} source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }}></Image>
        <Text style={styles.cardText}>{item.title}</Text>
        <Button title="Add to Favourites"
          onPress={() => addMovieToFavouritelist(item)}></Button>
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
      <TextInput style={styles.input}
        placeholder="Search Movie"
        value={query}
        onChange={onChange}
      >
      </TextInput>
      <View>
        <FlatList
          data={filterdData}
          keyExtractor={(item, index) => index.toString()}
          itmeSeparatorComponent={itmeSeparatorView}
          renderItem={itemView} />
      </View>
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

export default Add;