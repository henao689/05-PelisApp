import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Cast} from '../interfaces/creditsInterface';
import {styles} from '../themes/appTheme';

interface Props {
  actor: Cast;
}

export default function CastItem({actor}: Props) {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  return (
    <View style={styles.row}>
      <Image source={{uri}} style={style.image} />
      <View style={style.actorInfo}>
        <Text style={style.name}>{actor.name} -</Text>
        <Text style={style.character}>{actor.character}</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  actorInfo: {
    marginHorizontal: 20,
  },
  name: {
    fontWeight: 'bold',
  },
  character: {
    color: '#fa434a',
    fontWeight: 'bold',
    paddingLeft: 4,
  },
});
