import {Dimensions, StyleSheet} from 'react-native';

const screenHeight = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
  containerCarousel: {
    height: 440,
    marginBottom: 10,
  },
  containerView: {
    width: 300,
    height: 400,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.27,
    shadowRadius: 5.65,

    elevation: 8,
  },
  image: {
    flex: 1,
    borderRadius: 10,
  },
  imageDetailContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.27,
    shadowRadius: 5.65,
  },
  imageDetail: {
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  marginContainer: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  rowSalto: {
    flexWrap: 'wrap',
  },
  title: {marginTop: 10, fontSize: 25},
  backButton: {
    position: 'absolute',
    top: 25,
  },
});
