import React, { useState } from "react";

import useTable from "../../hooks/useTable";
import TableFooter from "./TableFooter";

import "./Table.css";

const Table = ({ data, rowsPerPage, openDetails }) => {
  const [page, setPage] = useState(1);
  const [sortData, setSortData] = useState(data);
  const { slice, range } = useTable(sortData, page, rowsPerPage);

  const sort = () => {
    const sortAscending = data.sort((a, b) => {
      if (a.capitalName < b.capitalName) return -1;
      if (a.capitalName > b.capitalName) return 1;
      return 0;
    });
    setSortData([...sortAscending]);
  };

  return (
    <>
      <table className="table">
        <thead className="tableRowHeader">
          <tr>
            <th className="tableHeader" onClick={sort}>
              Capital Name
            </th>
            <th className="tableHeader">Code</th>
            <th className="tableHeader">Flag</th>
            <th className="tableHeader">Lat-Lng</th>
            <th className="tableHeader">Name</th>
            <th className="tableHeader">Population</th>
            <th className="tableHeader">Region</th>
            <th className="tableHeader">Subregion</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((c, index) => (
            <tr
              className="tableRowItems"
              key={index}
              onClick={() => openDetails(c)}
            >
              <td className="tableCell">{c.capitalName}</td>
              <td className="tableCell">{c.code}</td>
              <td className="tableCell">
                <img height={25} width={25} src={c.flag} alt="no-flag" />
              </td>
              <td className="tableCell">
                {`${c.latLng[0] ?? ""}, ${c.latLng[1] ?? ""}`}
              </td>
              <td className="tableCell">{c.name}</td>
              <td className="tableCell">{c.population}</td>
              <td className="tableCell">{c.region}</td>
              <td className="tableCell">{c.subregion}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default Table;
