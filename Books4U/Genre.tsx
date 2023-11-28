import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const fetchBookData = async () => {
  return [
    { id: 1, title: 'Book 1', genre: 'Fantasy' },
    { id: 2, title: 'Book 2', genre: 'Mystery' },
    { id: 3, title: 'Book 3', genre: 'Fantasy' },
    { id: 4, title: 'Book 4', genre: 'Sci-Fi' },
  ];
};

const GenreScreen = () => {
  const [genreCounts, setGenreCounts] = useState({});

  useEffect(() => {
    fetchBookData().then((books) => {
      const counts = {};
      books.forEach((book) => {
        counts[book.genre] = (counts[book.genre] || 0) + 1;
      });
      setGenreCounts(counts);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Books Read by Genre</Text>
      {Object.keys(genreCounts).map((genre) => (
        <View key={genre} style={styles.genreItem}>
          <Text style={styles.genreName}>{genre}</Text>
          <Text style={styles.genreCount}>{genreCounts[genre]}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  genreItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginBottom: 10,
  },
  genreName: {
    fontSize: 18,
  },
  genreCount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GenreScreen;
