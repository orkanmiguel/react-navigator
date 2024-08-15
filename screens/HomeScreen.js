import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {
  const [count, setCount] = React.useState(0);
  const incrementar = () => setCount(count + 1);

  useEffect(() => {
    navigation.setParams({ incrementar });
  }, [count]);

  console.log(navigation.params);
  const navigate = useNavigation();

  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: "center", marginTop: "20%" }}>
        Home Screen{count}
      </Text>
      <TouchableOpacity
        onPress={() => navigate.navigate("Stack")}
        style={{
          backgroundColor: "red",
          padding: 10,
          marginTop: "20%",
          width: "50%",
          alignSelf: "center",
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 15, textAlign: "center", color: "white" }}>
          Go to stack Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
