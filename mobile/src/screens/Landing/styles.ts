import { StyleSheet } from 'react-native';
import colors from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainPurple,
    justifyContent: 'center',
    padding: 40,
  },

  banner: {
    width: '100%',
    resizeMode: 'contain',
  },

  title: {
    fontFamily: 'Poppins_400Regular',
    color: colors.defaultWhite,
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
  },

  titleBold: {
    fontFamily: 'Poppins_600SemiBold',
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
  },

  button: {
    height: 150,
    width: '48%',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between',
  },

  buttonPrimary: {
    backgroundColor: colors.purpleLight,
  },

  buttonSecondary: {
    backgroundColor: colors.mainGreen,
  },

  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: colors.defaultWhite,
    fontSize: 20,
  },

  totalConnections: {
    fontFamily: 'Poppins_400Regular',
    color: colors.purpleLightier,
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 140,
    marginTop: 40,
  },
});

export default styles;
