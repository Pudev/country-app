// import axios from "axios";
import React, { useEffect, useState } from "react";
import { countries as countriesData } from "./contries-mock-data";
import Modal from "../components/Modal/Modal";
import Table from "../components/Table/Table";

const FirstPage = () => {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentCountry, setCurrentCountry] = useState({});

  const fetchData = async () => {
    // const result = await axios.get(
    //   "https://excitel-countries.azurewebsites.net/countries"
    // );
    setCountries(countriesData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSearch = (e) => {
    e.preventDefault();
    const filteredResults = countriesData.filter((c) =>
      c.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
    setCountries([...filteredResults]);
  };

  const openDetails = (country) => {
    setIsModalVisible(true);
    setCurrentCountry({ ...country });
  };

  return (
    <>
      <form id="search-form">
        <input
          type="search"
          placeholder="Country name..."
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <input type="submit" value="Search" onClick={onSearch} />
      </form>

      <Table data={countries} rowsPerPage={10} openDetails={openDetails} />
      {isModalVisible && (
        <Modal onClose={() => setIsModalVisible(false)}>
          <div>Country name: {currentCountry.name}</div>
          <div>Capital name: {currentCountry.capitalName}</div>
          <div>Code: {currentCountry.code}</div>
          <div>Flag: {currentCountry.flag}</div>
          <div>Population: {currentCountry.population}</div>
          <div>Region: {currentCountry.region}</div>
          <div>Subregion: {currentCountry.subregion}</div>
        </Modal>
      )}
    </>
  );
};

export default FirstPage;
