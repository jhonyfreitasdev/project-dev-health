import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imcContainer: {
    marginTop: 15,
    paddingTop: 60,
    borderRadius: 50,
    alignItems: 'center',
    width: '100%',
    fontSize: 48,
    color: '#ff0043',
    fontWeight: 'bold'
  },
  imcNumber: {
    fontSize: 38,
    color: '#ff0043',
    fontWeight: 'bold'
  },
  information: {
    fontSize: 18,
    color: '#ff0043',
    fontWeight: 'bold'
  },
  shareButtonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  sharedButton: {
    backgroundColor: '#1877f2',
    borderRadius: 50,
    paddingVertical: 7,
  },
  sharedText:{
    color: '#ffffff',
    fontWeight: 'bold',
    paddingHorizontal: 30
  }
});

export default styles;