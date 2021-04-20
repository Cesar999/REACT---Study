import React, { useState, useRef, useEffect }  from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, TableSortLabel, Paper, IconButton, Checkbox, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import shortid from 'shortid';
import './MyTable.scss';
import MyModal from './MyModal';

function createData(name, move, level) {
    const ID = shortid.generate();
    return { name, move, level, ID};
}

const headers = ['name', 'move', 'level', 'ID'];

const initial_rows = [
    createData('Zoroark', 'Night Daze', 70),
    createData('Salamence', 'Outrage', 60),
    createData('Aggron', 'Iron Head', 45),
    createData('Staraptor', 'Brave Bird', 35),
    createData('Murkrow', 'Dark Pulse', 15),
]

const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    maxWidth: '100%'
}

const useStyles = makeStyles((theme) => ({
    root: {

    },
    tableHead: {
        backgroundColor: theme.palette.primary.main
    },
    paper: {
      maxWidth: 800,
    }
}));

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
}
  
function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
}

function MyTable(){
    const [rows, setRows] = useState([...initial_rows]);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('name');
    const [selected, setSelected] = useState([]);
    const deleteButton = useRef(null);
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [newData, setNewData] = useState({name: '', move: '', level: 0, ID: ''});
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const clearData = () => {
        setNewData({name: '', move: '', level: 0, ID: ''});
    }

    const handleClose = () => {
        setOpen(false);
        clearData();
    }

    const handleAdd = () => {
        setOpen(true);
        clearData();
    }

    const addData = (name, move, level) => {
        setRows([...rows, createData(name, move, level)])
    }

    const isSelected = (ID) => selected.indexOf(ID) !== -1;
    const onSelected = (ID) => {
        if(selected.includes(ID)){
            const newSelected = selected.filter(item=>item!==ID);
            setSelected([...newSelected]);
        } else {
            setSelected([...selected, ID]);
        }
    }

    const onSelectAll = () => {
        if(selected.length<=0){
            const newSelected = rows.map(row=>row.ID);
            setSelected([...newSelected]);
        } else {
            setSelected([]);
        }
    }

    const onDelete = () => {
        const newRows = rows.filter(row =>!selected.includes(row.ID));
        setRows([...newRows]);
        deleteButton.current.classList.remove('visible');
    }

    const editData = (ID) => {
        setNewData(rows.find(row=>ID===row.ID));
        setOpen(true);
    }

    const updateData = (name, move, level, ID) => {
        const newRows = rows.map(row => {
            if(row.ID === ID){
                return {name, move, level, ID};
            } else {
                return row;
            }
        });
        setRows([...newRows]);
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event) => {
        setPage(0);
        setRowsPerPage(parseInt(event.target.value, 10));
    }

    const setSortDirection = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    }

    const sortRows = () => {
        const comparator = getComparator(order, orderBy);
        const sortedRows = [...rows].sort(comparator);
        setRows(sortedRows);
    }

    useEffect(() => {
        if(selected.length <= 0){
            deleteButton.current.classList.remove('visible');
        } else {
            deleteButton.current.classList.add('visible');
        }
        sortRows();
    }, [selected, order, orderBy])

    return (
        <div className="MyTable" style={style}>
            <Paper className={classes.paper}>
            <Grid container>
              <TableContainer component={Paper}>
                    <Table>
                        <TableHead className={classes.tableHead}>
                            <TableRow>
                                <TableCell>
                                    <Checkbox checked={selected.length === rows.length} onChange={onSelectAll}/>
                                </TableCell>
                                {headers.map(header => (
                                    <TableCell key={header}>
                                        <TableSortLabel
                                            onClick={()=>setSortDirection(header)}
                                            active={header === orderBy}
                                            direction={order}
                                        >
                                            {header}
                                        </TableSortLabel>
                                    </TableCell>)
                                )}
                                <TableCell>
                                    <IconButton className="deleteButton" color="secondary" ref={deleteButton} onClick={onDelete}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                const isItemSelected = isSelected(row.ID);
                                return (
                                <TableRow key={row.name}>
                                    <TableCell>
                                        <Checkbox 
                                            checked={isItemSelected}
                                            onChange={()=>onSelected(row.ID)}/>
                                    </TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.move}</TableCell>
                                    <TableCell>{row.level}</TableCell>
                                    <TableCell>{row.ID}</TableCell>
                                    <TableCell>
                                        <IconButton color="secondary" onClick={()=>editData(row.ID)}>
                                            <EditIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            )})}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 15]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Grid>
            </Paper>
            <br />
            <Button variant="contained" color="secondary" onClick={handleAdd}>Add</Button>
            <MyModal open={open} handleClose={handleClose} addData={addData} updateData={updateData} newData={newData}/>
        </div>
    )
}

export default MyTable;