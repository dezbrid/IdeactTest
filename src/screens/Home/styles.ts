import {StyleSheet} from 'react-native';
import {normalize, COLORS} from '@constants';

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
});
