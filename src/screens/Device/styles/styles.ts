import { StyleSheet } from 'react-native';
import { theme } from '../../../global/theme/theme';
import { normalize } from '../../../utils/normalize';

export const styles = StyleSheet.create({
  border: {
    borderColor: 'red',
    borderWidth: 1,
  },

  container: {
    flex: 1,
  },

  connectDevice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(8),
    margin: normalize(16),
    borderRadius: normalize(8),
    backgroundColor: theme.colors.background,
    elevation: 2,
  },

  equalizer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(8),
    marginHorizontal: normalize(16),
    marginBottom: normalize(16),
    borderRadius: normalize(8),
    backgroundColor: theme.colors.background,
    elevation: 2,
    height: 300,
  },

  battery: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    gap: normalize(4),
  },

  displayButtons: {
    marginTop: 'auto',
    flexDirection: 'row',
    paddingHorizontal: normalize(16),
    justifyContent: 'space-between',
    gap: normalize(16),
  },
});
