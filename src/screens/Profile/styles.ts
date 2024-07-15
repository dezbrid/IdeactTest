import {StyleSheet} from 'react-native';
import {COLORS, normalize} from '@constants';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.white,
  },
  listContainer: {
    paddingHorizontal: normalize(10),
    backgroundColor: 'white',
  },
  separator: {
    height: normalize(8),
  },
  footer: {
    height: normalize(120),
  },
  headerComponent: {
    height: normalize(80),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    color: COLORS.black,
    fontSize: normalize(26),
    fontWeight: 'bold',
  },
  textSubTitle: {
    color: COLORS.black,
    fontSize: normalize(22),
    fontWeight: '500',
  },
});
