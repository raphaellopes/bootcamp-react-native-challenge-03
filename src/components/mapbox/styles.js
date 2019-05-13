import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  annotationContainer: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 15,
    height: 30,
    justifyContent: 'center',
    width: 30,
  },
  annotationFill: {
    backgroundColor: '#7159C1',
    borderRadius: 15,
    height: 30,
    transform: [{ scale: 0.8 }],
    width: 30,
  },
  container: {
    flex: 1,
  },
});
