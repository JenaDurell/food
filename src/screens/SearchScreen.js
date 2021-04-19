import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'


const SearchScreen = ({ navigation }) => {
  console.log(props)
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults()

  const filterResultsByPrice = (price) => {
      // price ==='$' || '$$' || '$$$'
      return results.filter(result => {
          return result.price === price
      })
  }

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(searchTerm)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
      <ResultsList results = {filterResultsByPrice('$')} title="Good n Cheap"
      navigation={navigation}/>
      <ResultsList results = {filterResultsByPrice('$$')} title="Spend Something"
      navigation={navigation}/>
      <ResultsList results = {filterResultsByPrice('$$$')} title="Super Taxed"
      navigation={navigation}/>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});
export default SearchScreen;
