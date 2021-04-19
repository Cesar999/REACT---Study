import React, { Component } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, TableSortLabel, Paper, IconButton, Checkbox, Button } from '@material-ui/core';
import shortid from 'shortid';
import './MyTable.scss';
import MyModal from './MyModal';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

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

class MyTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            rows: [],
            currentData: {
                name: '',
                move: '', 
                level: 1,
                ID: 0
            },
            open: false,
            sort: {name: 'asc', move: 'asc', level: 'asc', ID: 'asc'},
            page: 0,
            rowsPerPage: 5,
            orderBy: 'name',
            deleteSelected: false
        }
        this.selected = [];
        this.deleteButton = React.createRef()
    }

    componentDidMount(){
        const initialRows = [
            this.createData('Zangoose', 'Facade', 45),
            this.createData('Primeape', 'Close Combat', 28),
            this.createData('Gengar', 'Sludge Bomb', 60),
            this.createData('Nidoking','Earth Power', 36),
            this.createData('Umbreon', 'Bite', 19)
        ];
        this.setState(()=>{return {rows: initialRows}});
    }

    sortRows = (orderBy) => {
        const comparator = getComparator(this.state.sort[orderBy], orderBy);
        const sortedRows = [...this.state.rows].sort(comparator);
        const order = this.state.sort[orderBy] === 'asc' ? 'desc':'asc';
        this.setState({rows: sortedRows, orderBy, sort: {...this.state.sort, [orderBy]: order}});
    }

    onSelected = (ID) => {
        if(this.selected.includes(ID)){
            this.selected.splice(this.selected.indexOf(ID), 1);
        } else {
            this.selected.push(ID);
        }

        if(this.selected.length <= 0){
            this.deleteButton.current.classList.add('hidden');
        } else {
            this.deleteButton.current.classList.remove('hidden');
        }
    }

    deleteRows = () => {
        const newRows = this.state.rows.filter(row => {
            return !this.selected.includes(row.ID);
        });
        this.deleteButton.current.classList.add('hidden');
        this.setState(()=>{return {rows: newRows}});
    }

    handleChangePage = (event, newPage) => {
        this.setState({page: newPage});
    }
    
    handleChangeRowsPerPage = (event) => {
        this.setState({page: 0, rowsPerPage: parseInt(event.target.value, 10)});
    }

    createData = (name, move, level) => {
        const ID = shortid.generate();
        return { name, move, level, ID};
    }

    addData = (name, move, level) => {
        const newData = this.createData(name, move, level);
        this.setState(()=>{return {rows: [...this.state.rows, newData]}});
    }

    deleteData = (ID) => {
        const newRows = this.state.rows.filter((data)=>data.ID!==ID)
        this.setState(()=>{return {rows: newRows}})
    }

    updateData = (name, move, level, ID) => {
        const newData = {name, move, level, ID};
        const newRows = this.state.rows.map((data)=>{
            if(data.ID===newData.ID) {
                return newData;
            }
            return data;
        });
        this.setState(()=>{return {rows: newRows}})
    }

    handleClose = () => {
        this.setState({open: false, currentData:{name: '', move: '', level: 1}});
    }

    handleOpen = () => {
        this.setState({open: true});
    }

    editData = (name, move, level, ID) => {
        this.setState({currentData: {name, move, level, ID}, open: true});
    }

    render(){
        return (
            <div className="MyTable">
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <IconButton className="deleteButton hidden" ref={this.deleteButton} onClick={()=>this.deleteRows()}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                                {Object.keys(this.state.sort).map(header=>{
                                    return( 
                                    <TableCell key={header}>
                                        <TableSortLabel 
                                        onClick={()=>this.sortRows(header)}
                                        active={header === this.state.orderBy}
                                        direction={this.state.sort[header]}>
                                            {header}
                                        </TableSortLabel>
                                    </TableCell>)
                                })}
                                <TableCell/>
                                {/* <TableCell/> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.rows
                            .slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
                            .map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell>
                                    <Checkbox
                                        onClick={()=>this.onSelected(row.ID)}
                                    />
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell>{row.move}</TableCell>
                                    <TableCell>{row.level}</TableCell>
                                    <TableCell>{row.ID}</TableCell>
                                    <TableCell>
                                        <IconButton onClick={()=>this.editData(row.name, row.move, row.level, row.ID)}>
                                            <EditIcon />
                                        </IconButton>
                                    </TableCell>
                                    {/* <TableCell>
                                        <IconButton onClick={()=>this.deleteData(row.ID)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell> */}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 15]}
                    component="div"
                    count={this.state.rows.length}
                    rowsPerPage={this.state.rowsPerPage}
                    page={this.state.page}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
                <hr/>
                <MyModal 
                    addData={this.addData} 
                    updateData={this.updateData} 
                    handleOpen={this.handleOpen} 
                    handleClose={this.handleClose} 
                    {...this.state.currentData} 
                    open={this.state.open}
                />
            </div>
        )
    }
}

export default MyTable;