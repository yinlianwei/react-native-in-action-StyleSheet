import {StyleSheet} from 'react-native';

export const Colors = {
  dark: 'black',
  light: 'white',
};

const baseContainerStyles = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};


const baseBoxStyles = {
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 2,
  height: 150,
  width: 150,
};

const lightStylesSheet = StyleSheet.create({
  container: {
    ...baseContainerStyles,
    backgroundColor: Colors.light,
  },
  box: {
    ...baseBoxStyles,
    backgroundColor: Colors.light,
  },
});

const darkStylesSheet = StyleSheet.create({
  container: {
    ...baseContainerStyles,
    backgroundColor: Colors.dark,
  },
  box: {
    ...baseBoxStyles,
    backgroundColor: Colors.dark,
  },
});

export default function getStyleSheet(useDarkTheme) {
  return useDarkTheme ? darkStylesSheet : lightStylesSheet;
}
