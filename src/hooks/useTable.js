import { useState, useEffect } from "react";

const calculateRange = (data, rowsPerPage) => {
  const range = [];
  const num = Math.ceil(data.length / rowsPerPage);
  for (let i = 1; i <= num; i++) {
    range.push(i);
  }
  return range;
};

const sort = (data) => {
  const sortAscending = data.sort((a, b) => {
    if (a.capitalName < b.capitalName) return -1;
    if (a.capitalName > b.capitalName) return 1;
    return 0;
  });
  return [...sortAscending];
};

const sliceData = (data, page, rowsPerPage) => {
  return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

const useTable = (data, page, rowsPerPage, sortColumn) => {
  const [tableRange, setTableRange] = useState([]);
  const [slice, setSlice] = useState([]);

  useEffect(() => {
    let range = [];
    if (sortColumn) {
      const sortedData = sort(data);
      range = calculateRange(sortedData, rowsPerPage);
    } else {
      range = calculateRange(data, rowsPerPage);
    }
    setTableRange([...range]);

    const slice = sliceData(data, page, rowsPerPage);
    setSlice([...slice]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, setTableRange, page, setSlice, sortColumn]);

  return { slice, range: tableRange };
};

export default useTable;
