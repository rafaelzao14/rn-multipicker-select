import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

type ItemProps = {
  id: number;
  name: string;
};

interface ButtonSelectProps {
  item: ItemProps;
  toogleFunction: Function;
  selected: boolean;
}

const ButtonSelect = ({
  item,
  toogleFunction,
  selected,
}: ButtonSelectProps) => {
  return (
    <>
      {!selected ? (
        <TouchableOpacity
          style={styles.button}
          onPress={() => toogleFunction(item.id)}
        >
          <View style={styles.containerText}>
            <Text style={{ color: "#FFF" }}>{item?.name}</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.buttonSelect}
          onPress={() => toogleFunction(item.id)}
        >
          <View style={styles.containerTextSelected}>
            <Text style={{ color: "#FFF" }}>{item?.name}</Text>
            <Icon name={"check"} color={"#FFF"} />
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  containerText: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    textAlign: "left",
    alignItems: "center",
    padding: 8,
  },
  containerTextSelected: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "left",
    alignItems: "center",
    padding: 8,
  },
  button: {
    width: "48%",
    minHeight: 50,
    maxHeight: 80,
    margin: 4,

    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 8,

    alignItems: "center",
    justifyContent: "center",
  },
  buttonSelect: {
    width: "48%",
    minHeight: 50,
    maxHeight: 80,
    margin: 4,

    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 8,
    backgroundColor: "#376CF4",

    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
});

export default ButtonSelect;
