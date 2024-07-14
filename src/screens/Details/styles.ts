import {StyleSheet} from 'react-native';
import {COLORS, normalize} from '@constants';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.white,
    padding: normalize(15),
  },
  subContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
});
