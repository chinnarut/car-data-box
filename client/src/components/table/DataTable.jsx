import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./dataTable.scss";
import { useState } from 'react';

const dataTable = () => {
  const [carData, setCarData] = useState([]);

  const rows = [
    {
      id: 1,
      license: "AA001",
      brand: "Honda",
      model: "Civic",
      year: "2020",
      owner: "Way",
      region: "Central",
      package: "Pro"
    },
    {
      id: 2,
      license: "AA002",
      brand: "Toyota",
      model: "Yaris",
      year: "2021",
      owner: "Arthur",
      region: "Northern",
      package: "Starter"
    }
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">License</TableCell>
            <TableCell className="tableCell">Brand</TableCell>
            <TableCell className="tableCell">Model</TableCell>
            <TableCell className="tableCell">Year</TableCell>
            <TableCell className="tableCell">Owner</TableCell>
            <TableCell className="tableCell">Region</TableCell>
            <TableCell className="tableCell">Package</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="bodyCell">{row.id}</TableCell>
              <TableCell className="bodyCell">{row.license}</TableCell>
              <TableCell className="bodyCell">{row.brand}</TableCell>
              <TableCell className="bodyCell">{row.model}</TableCell>
              <TableCell className="bodyCell">{row.year}</TableCell>
              <TableCell className="bodyCell">{row.owner}</TableCell>
              <TableCell className="bodyCell">{row.region}</TableCell>
              <TableCell className="bodyCell">{row.package}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default dataTable
