import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: 30
  },
  form: {
    width: '100%',
    marginTop: 30,
    padding: 10
  },
  formLabel: {
    fontSize: 18,
    paddingLeft: 20,
  },
  formInput: {
    width: '90%',
    borderRadius: 50,
    backgroundColor: '#f6f6f6',
    height: 40,
    marginLeft: 12,
    marginBottom: 16,
    paddingLeft: 12
  },
  buttonCalculator: {
    borderRadius: 50,
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#ff0043',
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 10,
    marginTop: 30
  },
  textButtonCalculator: {
    fontSize: 20,
    color: '#fff',
  },
  errorMessage: {
    fontSize: 12,
    color: '#ff0000',
    fontWeight: 'bold',
    paddingLeft: 20
  },
  imcContext: {
    width: '100%',
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: 30,
    padding: 20
  },
  list: {
    borderColor: '#c6c6c6',
    borderWidth: 2,
    width: '85%',
    borderRadius: 15,
    marginTop: 30
  },
  resultContainer: {
    marginHorizontal: 'auto',
    marginVertical: 15,
    textAlign: 'center',
    color: 'red',
    fontSize: 24,
    fontWeight: 'bold'
  },
  label: {
    fontWeight: 'normal',
    fontSize: 16,
  }
});

export default styles;