import { StyleSheet} from "react-native";

const SPACING = 15;

export const styles = StyleSheet.create({
  imgItem: {
    width: 40,
    height: 40,
    marginRight: SPACING,
  },
  desItem: {
    fontSize:22,
  },
  dateItem: {
    fontSize:12,
    opacity: 0.5,
  },
  transItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: SPACING,
    marginBottom: SPACING,
    overflow: "visible",
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: 12,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 20,

    elevation: 8,
  },
});