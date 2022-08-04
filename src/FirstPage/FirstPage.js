// import axios from "axios";
import React, { useEffect, useState } from "react";
import { countries as countriesData } from "./contries-mock-data";
import Modal from "../components/Modal/Modal";
import Table from "../components/Table/Table";

const FirstPage = () => {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(true);

  const fetchData = async () => {
    // const result = await axios.get(
    //   "https://excitel-countries.azurewebsites.net/countries",
    //   {
    //     proxy: {
    //       host: "localhost",
    //       port: 3000,
    //     },
    //   }
    // );
    setCountries(countriesData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // TODO: ascending and descending all the columns
  const onSort = (e) => {
    const sortAscending = countries.sort((a, b) => {
      if (a.capitalName < b.capitalName) return -1;
      if (a.capitalName > b.capitalName) return 1;
      return 0;
    });
    setCountries([...sortAscending]);
  };

  const onSearch = (e) => {
    e.preventDefault();
    const filteredResults = countriesData.filter((c) =>
      c.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
    setCountries([...filteredResults]);
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

      <Table data={countriesData} rowsPerPage={20} />
      {isModalVisible && (
        <Modal onClose={() => setIsModalVisible(false)}>Test some details</Modal>
      )}
    </>
  );
};

export default FirstPage;
