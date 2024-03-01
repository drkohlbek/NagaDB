import { Link } from 'react-router-dom'

export const columnDef = [
  {
    accessorKey: 'firstName', 
    id: 'firstName', 
    header: "First Name", 
    cell: (info) => {
      return (
        <Link to={`/veterans/${info.row.original._id}`}>{info.row.original.firstName}</Link>
      )
    }
  }, 
  {
    accessorKey: 'middleName', 
    id: 'middleName', 
    header: 'Middle Name', 
    cell: (info) => {
      return (
        <Link to={`/veterans/${info.row.original._id}`}>{info.row.original.middleName}</Link>
      )
    }
  },
  {
    accessorKey: 'lastName', 
    id: 'lastName', 
    header: 'Last Name', 
    cell: (info) => {
      return (
        <Link to={`/veterans/${info.row.original._id}`}>{info.row.original.lastName}</Link>
      )
    }
  },
  {
    accessorKey: 'branch', 
    header: 'Branch', 
  },
  {
    accessorKey: 'rank', 
    header: 'Rank', 
  },
  {
    accessorKey: 'warPeriod', 
    header: 'War Period', 
  },
  {
    accessorKey: 'DOB', 
    header: 'DOB', 
  },
  {
    accessorKey: 'DOD', 
    header: 'DOD', 
  },
  {
    accessorKey: 'cemetery.name', 
    id: 'cemetery', 
    header: 'Cemetery', 
    cell: (info) => {
      return (
        <Link to={`/cemeteries/${info.row.original.cemetery.id}`}>{info.row.original.cemetery.name}</Link>
      )
    }
  },
  {
    accessorKey: 'location', 
    header: 'Location', 
  }
]
