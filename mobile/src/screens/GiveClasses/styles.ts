import { StyleSheet } from 'react-native';
import colors from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainPurple,
    justifyContent: 'center',
    padding: 40,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontFamily: 'Archivo_700Bold',
    color: colors.defaultWhite,
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  },

  description: {
    marginTop: 24,
    color: colors.purpleLightier,
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Poppins_400Regular',
    maxWidth: 240,
  },

  okButton: {
    marginVertical: 40,
    backgroundColor: colors.mainGreen,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  okButtonText: {
    color: colors.defaultWhite,
    fontSize: 16,
    fontFamily: 'Archivo_700Bold',
  },
});

export default styles;
