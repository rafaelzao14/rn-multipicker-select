import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { namesExamples } from "../../mock/names";
import ButtonSelect from "../ButtonSelect";

interface AtendentesProps {
  name: string;
  id: number;
}

const PickerButton = () => {
  // const [atendentes, setAtendentes] = useState<AtendentesProps>(names);
  const [selectedAtendente, setSelectedAtendentes] = useState<number[]>([]);
  console.log(selectedAtendente);

  const toogleSelect = (id: number) => {
    const filteredSelectedAtendentes = selectedAtendente.some(
      (item) => item === id
    );

    if (filteredSelectedAtendentes) {
      const filteredSelected = selectedAtendente.filter((item) => item !== id);
      console.log(filteredSelected);
      setSelectedAtendentes(filteredSelected);
      return;
    }
    setSelectedAtendentes([...selectedAtendente, id]);
  };

  return (
    <View style={styles.containerButtons}>
      {/* <FlatList
        data={namesExamples}
        renderItem={({ item }) => {
          return (
            <ButtonSelect
              item={item}
              selected={selectedAtendente.some((select) => select === item.id)}
              toogleFunction={toogleSelect}
            />
          );
        }}
      /> */}
      <ScrollView contentContainerStyle={styles.containerButtons}>
        {namesExamples.map((user) => (
          <ButtonSelect
            item={user}
            selected={selectedAtendente.some((select) => select === user.id)}
            toogleFunction={toogleSelect}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerButtons: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#3F80FF",
    alignItems: "center",
    paddingTop: 40,
  },
});

export default PickerButton;
