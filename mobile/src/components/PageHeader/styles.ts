import { StyleSheet } from 'react-native';
import colors from '../../theme';

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: colors.mainPurple,
  },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontFamily: 'Archivo_700Bold',
    color: colors.defaultWhite,
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 160,
    marginVertical: 40,
  },
});

export default styles;
