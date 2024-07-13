import { Button, StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SearchBar = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Button title="Filter Search" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginTop: 4,
    borderRadius: 10,
  },
});

export default SearchBar;
