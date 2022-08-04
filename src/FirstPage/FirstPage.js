// import axios from "axios";
import React, { useEffect, useState } from "react";
import { countries as countriesData } from "./contries-mock-data";

const FirstPage = () => {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");

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

  // const TableFooter = ({ range, setPage, page, slice }) => {
  //   useEffect(() => {
  //     if (slice.length < 1 && page !== 1) {
  //       setPage(page - 1);
  //     }
  //   }, [slice, page, setPage]);
  //   return (
  //     <div >
  //       {range.map((el, index) => (
  //         <button
  //           key={index}
  //           // className={`${styles.button} ${
  //           //   page === el ? styles.activeButton : styles.inactiveButton
  //           // }`}
  //           onClick={() => setPage(el)}
  //         >
  //           {el}
  //         </button>
  //       ))}
  //     </div>
  //   );
  // };

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

      <table>
        <thead>
          <th onClick={onSort}>Capital Name</th>
          <th>Code</th>
          <th>Flag</th>
          <th>Lat-Lng</th>
          <th>Name</th>
          <th>Population</th>
          <th>Region</th>
          <th>Subregion</th>
        </thead>
        <tbody>
          {countries.map((c) => {
            return (
              <tr>
                <td>{c.capitalName}</td>
                <td>{c.code}</td>
                <td>
                  <img height={25} width={25} src={c.flag} alt="no-flag" />
                </td>
                {/* TODO: if latitude and landitude are null */}
                <td>{`${c.latLng[0] ?? ""}, ${c.latLng[1] ?? ""}`}</td>
                <td>{c.name}</td>
                {/* TODO: population format */}
                <td>{c.population}</td>
                <td>{c.region}</td>
                <td>{c.subregion}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default FirstPage;
