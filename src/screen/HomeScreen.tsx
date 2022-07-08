// import {useNavigation} from '@react-navigation/native';
// import {StackNavigationProp} from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react';
import {ActivityIndicator, Dimensions, ScrollView, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import GradientBackground from '../components/GradientBackground';
import {HorizontalSlider} from '../components/HorizontalSlider';
import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import {styles} from '../themes/appTheme';
import {getImageColors} from '../helpers/getImageColors';
import {GradientContext} from '../context/GradientContext';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const {changeColors} = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const [primary = '#084f6a', secondary = '#75cecb'] = await getImageColors(
      uri,
    );
    changeColors({primary, secondary});
  };

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nowPlaying]);

  if (isLoading) {
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <ActivityIndicator color={'#bbb'} size={80} />
      </View>
    );
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{top: top + 10}}>
          <View style={styles.containerCarousel}>
            <Carousel
              data={nowPlaying}
              renderItem={({item}) => <MoviePoster movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>
          {/* Peliculas nuevas */}
          <HorizontalSlider title="En cine" movies={nowPlaying} />
          {/* Peliculas Populares */}
          <HorizontalSlider title="Populares" movies={popular} />
          {/* Peliculas Populares */}
          <HorizontalSlider title="Más vistas" movies={topRated} />
          {/* Peliculas Populares */}
          <HorizontalSlider title="Próximas" movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};
