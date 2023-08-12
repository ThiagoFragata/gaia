import { StyleSheet } from 'react-native';
import { normalize } from '../../../utils/normalize';

export const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: normalize(16),
    paddingHorizontal: normalize(16),
  },
});
