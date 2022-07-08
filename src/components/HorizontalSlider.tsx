import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Movies} from '../interfaces/moviesInterface';
import {MoviePoster} from './MoviePoster';

interface Props {
  title?: string;
  movies: Movies[];
}

export const HorizontalSlider = ({movies, title}: Props) => {
  return (
    <View style={styles.flatListContainer}>
      {title && <Text style={styles.flatListTitle}>{title}</Text>}
      <FlatList
        data={movies}
        renderItem={({item}) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        horizontal={true}
        // keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    height: 270,
    paddingVertical: 5,
  },
  flatListTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    paddingHorizontal: 6,
  },
  flatList: {
    flex: 1,
    borderRadius: 10,
  },
});
