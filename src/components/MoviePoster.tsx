import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {Movies} from '../interfaces/moviesInterface';
import {styles} from '../themes/appTheme';

interface Props {
  movie: Movies;
  height?: number;
  width?: number;
}

export const MoviePoster: React.FC<Props> = ({
  movie,
  height = 420,
  width = 300,
}) => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', movie)}
      activeOpacity={0.8}
      style={{width, height, marginHorizontal: 5}}>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};
