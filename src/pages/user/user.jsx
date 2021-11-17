/* eslint-disable jsx-a11y/img-redundant-alt */
import './user.css'
import { React, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { Rows } from '../../dummydata/dummydata';
import { useParams, Link } from 'react-router-dom';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



export default function CustomizedTables() {

    const [data, setdata] = useState(Rows)


    const userDeleteButton = (id) => {
        setdata(data.filter((item) => item.id !== id))
    }

    return (

        <TableContainer component={Paper}>
            <div className='userTable'>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align='right'>ID</StyledTableCell>
                            <StyledTableCell align='center'>User</StyledTableCell>
                            <StyledTableCell align="center">Email</StyledTableCell>
                            <StyledTableCell align="right">State</StyledTableCell>
                            <StyledTableCell align="right">Transaction</StyledTableCell>
                            <StyledTableCell align='center'>Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (

                            <StyledTableRow key={row.name}>
                                <StyledTableCell align="right">{row.id}</StyledTableCell>
                                <StyledTableCell component="th" className='myuser' style={{ display: 'flex' }} scope="row">
                                    <img className='userImage' src={row.image} alt='image not found' />
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <span className='button'>
                                        <Link to='/edituser' >
                                            <Button variant="contained" href="#contained-buttons">
                                                Edit
                                            </Button>
                                        </Link>
                                        <button onClick={() => userDeleteButton(row.id)}>
                                            <DeleteIcon />
                                        </button>
                                    </span>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </TableContainer>


    );
}