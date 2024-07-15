import {StyleSheet} from 'react-native';
import {normalize, COLORS} from '@constants';

const IMAGEN_SIZE = normalize(100);

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.white,
  },
  listContainer: {
    paddingHorizontal: normalize(10),
    backgroundColor: 'white',
  },
  itemContainer: {
    flexDirection: 'row',
    height: normalize(120),
    padding: normalize(10),
    borderRadius: 10,
    borderWidth: 3,
    borderColor: COLORS.concrate,
  },
  itemSubContainer: {
    flexDirection: 'column',
    flexGrow: 1,
    marginLeft: normalize(10),
  },
  imagen: {
    width: IMAGEN_SIZE,
    height: IMAGEN_SIZE,
    alignSelf: 'center',
  },
  textName: {
    color: COLORS.black,
    fontSize: normalize(18),
    fontWeight: 'bold',
    flexShrink: 1,
  },
  textArtistName: {
    color: COLORS.black,
    fontSize: normalize(16),
    fontWeight: '300',
  },
  separator: {
    height: normalize(8),
  },
  footer: {
    height: normalize(120),
  },
  playContainer: {
    height: normalize(40),
    width: normalize(70),
    backgroundColor: COLORS.concrate,
    position: 'absolute',
    right: 10,
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playIcon: {
    height: normalize(25),
  },
});
