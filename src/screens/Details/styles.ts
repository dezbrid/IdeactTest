import {StyleSheet} from 'react-native';
import {COLORS, normalize} from '@constants';

const IMAGEN_SIZE = normalize(350);
export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.white,
    padding: normalize(15),
  },
  imagen: {
    width: IMAGEN_SIZE,
    height: IMAGEN_SIZE,
    alignSelf: 'center',
  },
  textName: {
    color: COLORS.black,
    fontSize: normalize(26),
    fontWeight: 'bold',
    flexShrink: 1,
  },
  textArtistName: {
    color: COLORS.black,
    fontSize: normalize(22),
    fontWeight: '500',
  },
  textSumary: {
    marginTop: 5,
    color: COLORS.gray,
    fontSize: normalize(14),
    fontWeight: '300',
  },
});
