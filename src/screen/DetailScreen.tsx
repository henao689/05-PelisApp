/* eslint-disable prettier/prettier */
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  View,
  Image,
  Text,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MovieDetails} from '../components/MovieDetails';
import {useMovieDetails} from '../hooks/useMovieDetails';
import {RootStackParams} from '../Navigation/Navigator';
import {styles} from '../themes/appTheme';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailScreen = ({route, navigation}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const {cast, isLoading, movieFull} = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageDetailContainer}>
        <View style={styles.imageBorder}>
          <Image source={{uri}} style={styles.imageDetail} />
        </View>
      </View>

      <View style={styles.marginContainer}>
        <Text>{movie.original_title}</Text>
        <Text>{movie.title}</Text>
      </View>

      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <MovieDetails movieFull={movieFull!} cast={cast} />
        )}
      </View>
      {/* Boton para cerrar */}
      <TouchableOpacity style={styles.backButton} onPress={()=> navigation.pop()}>
        <Icon color={'white'} name="arrow-back-outline" size={60} />
      </TouchableOpacity>
    </ScrollView>
  );
};
