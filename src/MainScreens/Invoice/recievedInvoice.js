import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SearchIcon from "@material-ui/icons/Search";
import styles from "styled-components";



const StyledTableCell = withStyles((theme) => ({
  head: {
    color: '#4CAF50',
    fontSize: '15px',
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(Date, CustomerID, ItemID, Amount, Description, Status) {
  return { Date, CustomerID, ItemID, Amount, Description, Status};
}

const rows = [
  createData('20/20/2020', 'ID 1007', '#144343','60,000', 'Farm Produce', 'success'),
  createData('01/02/2020', 'ID 1002','#144903','60,750', 'Electonics', 'Declined'),
  createData('10/12/2020','ID 2022', '#155555','10,000', 'Clothing', 'Refunded'),
  createData('05/06/2020','ID 0900', '#144203','1000', 'Agric', 'success'),
  createData('09/07/2020', 'ID 0070','#143004','25,550', 'shoes', 'success'),
  createData('01/02/2020', 'ID 1002','#144903','60,750', 'Electonics', 'Declined'),
  createData('10/12/2020','ID 2022', '#155555','10,000', 'Clothing', 'Refunded'),
  createData('05/06/2020','ID 0900', '#144203','1000', 'Agric', 'success'),
  createData('20/20/2020', 'ID 1007', '#144343','60,000', 'Farm Produce', 'success'),
  createData('01/02/2020', 'ID 1002','#144903','60,750', 'Electonics', 'Declined'),
  createData('10/12/2020','ID 2022', '#155555','10,000', 'Clothing', 'Refunded'),
  createData('05/06/2020','ID 0900', '#144203','1000', 'Agric', 'success'),
  createData('09/07/2020', 'ID 0070','#143004','25,550', 'shoes', 'success'),
  
];

const useStyles = makeStyles({
  table: {
    minWidth: 500,
    margin: 'auto',
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <>
    <div className="d-header">
        <div className="d-header-menu">
          <li className="d-header-menu-li">Recieved Invoice</li>
        </div>
        <Search>
          <input placeholder="Search your Invoice list..." />
          <button className="btn">
            <SearchIcon className="icon" />
          </button>
        </Search>
      </div>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>Customer ID</StyledTableCell>
            <StyledTableCell >Item ID</StyledTableCell>
            <StyledTableCell >Date</StyledTableCell>
            <StyledTableCell >Amount</StyledTableCell>
            <StyledTableCell >Description</StyledTableCell>
            <StyledTableCell >Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.CustomerID}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">{row.ItemID}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{row.Date}</StyledTableCell>
              <StyledTableCell component="th" scope="row">₦{row.Amount}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{row.Description}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{row.Status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}


const Search = styles.div`
width: 30%;
  border: solid 0.5px #979696;
  margin: 12px 0px;
  margin-right: 18px;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  input{
    border: none;    
    width: 90%;
    padding-left: 5px;
  }
  .btn{
    background-color: #504f4f;
    margin: 2px 2px;
    color: #fff;
    height: 40px;
  }


`;