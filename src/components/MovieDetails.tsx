/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormater from 'currency-formatter';
import {Cast} from '../interfaces/creditsInterface';
import {MovieFullDetails} from '../interfaces/moviesInterface';
import {styles} from '../themes/appTheme';
import CastItem from './CastItem';

interface Props {
  movieFull: MovieFullDetails;
  cast: Cast[];
}

export const MovieDetails = ({cast, movieFull}: Props) => {
  return (
    <View style={styles.marginContainer}>
      <View style={styles.row}>
        <Icon name="star" color={'gray'} size={20} />
        <Text>{movieFull.vote_average}</Text>
      </View>
      <Text>{movieFull.genres.map(g => g.name).join(', ')}</Text>
      <View>
        {/* historia */}
        <Text style={styles.title}>Historia</Text>
        <Text>{movieFull.overview}</Text>
        {/* presupuesto */}
        <Text style={styles.title}>Presupuesto</Text>
        <Text>{currencyFormater.format(movieFull.budget, {code: 'USD'})}</Text>
        <Text style={styles.title}>Actores</Text>
        <FlatList
          data={cast}
          keyExtractor={(item)=> item.id.toString()}
          renderItem={({item})=> <CastItem actor={item}/>}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
