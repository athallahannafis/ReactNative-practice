import {StyleSheet} from 'react-native';

export const globalStyling = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20%",
    marginBottom: "20%",
  },
  columnContainer: {
    flex: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  rowContainer: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rowSpacing: {
    marginLeft: 10,
    marginRight: 10,
  },
  columnSpacing: {
    marginTop: 20,
    marginBottom: 20,
  },
  buttonType1: {
    width: 40,
  },
  menuButton: {
    flex: 0,
    flexDirection: "column",
    alignItems: "center",
    marginTop:10,
    padding: 20,
    width: 170,
    backgroundColor:'#68a0cf',
    borderRadius:1000,
    borderWidth: 1,
    borderColor: '#fff'
  },
  squareButton: {
    flex: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent:"center",
    padding: 20,
    width: 70,
    height: 70,
    borderRadius: 1000,
    backgroundColor: "#68a0cf",
  },
  globalFont: {
    fontWeight: "bold",
  },
  plusMinusFont: {
    fontWeight: "bold",
    fontSize: 20,
  },
  selectionButton: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    minWidth: "90%"
  }
})