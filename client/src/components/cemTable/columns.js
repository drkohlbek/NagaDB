import { Link } from 'react-router-dom';

export const columnDef = [
  {
    id: 'name', 
    header: "Cemetery", 
    cell: (info) => {
      return (
        <Link to={`/cemeteries/${info.row.original._id}`}>{info.row.original.name}</Link>
      )
    }
  }, 
  {
    accessorKey: 'phone', 
    header: 'Phone Number', 
  },
  {
    accessorKey: 'location.address', 
    header: 'Address'
  }
]
