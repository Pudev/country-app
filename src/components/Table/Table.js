import React, { useState } from "react";

import useTable from "../../hooks/useTable";
import styles from "./Table.module.css";
import TableFooter from "./TableFooter";

const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  return (
    <>
      <table className={styles.table}>
        <thead className={styles.tableRowHeader}>
          <tr>
            <th className={styles.tableHeader}>Capital Name</th>
            <th className={styles.tableHeader}>Code</th>
            <th className={styles.tableHeader}>Flag</th>
            <th className={styles.tableHeader}>Lat-Lng</th>
            <th className={styles.tableHeader}>Name</th>
            <th className={styles.tableHeader}>Population</th>
            <th className={styles.tableHeader}>Region</th>
            <th className={styles.tableHeader}>Subregion</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((c, index) => (
            <tr className={styles.tableRowItems} key={index}>
              <td className={styles.tableCell}>{c.capitalName}</td>
              <td className={styles.tableCell}>{c.code}</td>
              <td className={styles.tableCell}>
                <img height={25} width={25} src={c.flag} alt="no-flag" />
              </td>
              <td className={styles.tableCell}>
                {`${c.latLng[0] ?? ""}, ${c.latLng[1] ?? ""}`}
              </td>
              <td className={styles.tableCell}>{c.name}</td>
              <td className={styles.tableCell}>{c.population}</td>
              <td className={styles.tableCell}>{c.region}</td>
              <td className={styles.tableCell}>{c.subregion}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default Table;
