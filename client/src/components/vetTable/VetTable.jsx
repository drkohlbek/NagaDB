import React, { useMemo, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./vetTable.css";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { columnDef } from "./columns";
import FilterFunction from "./tableFiltering/FilterFunction";
import { useReactToPrint } from 'react-to-print'; 

import {
  AiFillCaretRight,
  AiFillCaretLeft,
  AiFillCaretDown,
  AiFillCaretUp,
} from "react-icons/ai";

const VetTable = ({ vetsArray, cemsArray }) => {
  // print 
  const tableP = useRef(); 
  const handlePrint = useReactToPrint({
    content: () => tableP.current,
  }); 


  const finalData = useMemo(() => vetsArray, []);
  const finalColumnDef = useMemo(() => columnDef, []);

  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [columnFilters, setColumnFilters] = useState([]);

  const table = useReactTable({
    data: finalData,
    columns: finalColumnDef,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
      columnFilters: columnFilters,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    onColumnFiltersChange: setColumnFilters,
  });
  
  

  return (
    <div className="container">
    
    <div className="nagadb__topOptions-container">
      <input
          type="text"
          value={filtering}
          placeholder="Search"
          onChange={(e) => setFiltering(e.target.value)}
        />
      <button className="nagadb__printButton" onClick={handlePrint}>Export to PDF</button>
    </div>
    <div className="nagadb__vetTable-container">
      

      <table ref={tableP}>
        <thead>
          {table.getHeaderGroups().map((headerEl) => {
            return (
              <tr key={headerEl.id}>
                {headerEl.headers.map((columnEl) => {
                  return (
                    <th
                      key={columnEl.id}
                      colSpan={columnEl.colSpan}
                      onClick={columnEl.column.getToggleSortingHandler()}
                    >
                      {flexRender(
                        columnEl.column.columnDef.header,
                        columnEl.getContext()
                      )}
                      {/*
                      UNCOMMENT FOR COLUMN FILTERING 
                      <div>
                        <FilterFunction column={columnEl.column} table={table} />
                      </div> 
                      */}
                      {
                        { asc: <AiFillCaretUp />, desc: <AiFillCaretDown /> }[
                          columnEl.column.getIsSorted() ?? null
                        ]
                      }
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}

        </tbody>
      </table>

    </div>
      {/* First, Prev, Next, Last page buttons and pagination options */}
      <div className="nagadb__vetTable-container__options-container">
        <div className="nagadb__vetTable-container__options-container__buttons">
        <button onClick={() => table.setPageIndex(0)}>First Page</button>
        <button
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          <AiFillCaretLeft />
        </button>
        <button
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        >
          <AiFillCaretRight />
        </button>
        <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
          Last Page
        </button>
        </div>

        <p>
          Showing Page {table.options.state.pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </p>

        <select
          value={table.options.state.pagination.pageSize}
          onChange={(e) => table.setPageSize(e.target.value)}
        >
          {[10, 25, 50, finalData.length].map((pageSizeEl) => {
            return (
              <option key={pageSizeEl} value={pageSizeEl}>
                Show {pageSizeEl}
              </option>
            );
          })}
        </select>
      </div>
      <div className="nagadb__links-container">
        <Link to="/cemeteries">
          <button type="button"> 
            View Cemeteries
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VetTable;
