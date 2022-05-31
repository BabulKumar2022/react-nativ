import { View, Text } from "react-native";
import React from "react";
import { useState, useEffect } from "react";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <View>
      <Text>countries:{countries.length}</Text>
    </View>
  );
}
