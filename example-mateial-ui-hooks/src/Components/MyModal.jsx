import React, { useState, useEffect } from 'react';
import { Modal, Input, Button, Typography, Paper } from '@material-ui/core';
import './MyModal.scss';
import { makeStyles } from '@material-ui/core/styles';

function MyModal(props){
    const [name, setName] = useState('');
    const [move, setMove] = useState('');
    const [level, setLevel] = useState(0);

    const handleChange = (e) => {
        switch(e.target.name){
            case 'name':
                setName(e.target.value);
                break;
            case 'move':
                setMove(e.target.value);
                break;
            case 'level':
                setLevel(e.target.value);
                break;
            default:
                break;
        }
    }

    const useStyles = makeStyles((theme) => ({
        root: {
    
        },
        paper: {
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
            padding: '6px 16px'
        }
    }));
    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(props.newData.ID === '') {
            props.addData(name, move, level);
        } else {
            props.updateData(name, move, level, props.newData.ID);
        }
        props.handleClose();
    }

    const populateModal = ({name, move, level}) => {
        setName(name);
        setMove(move);
        setLevel(level);
    }

    const centerModal = {
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    };

    useEffect(() => {
        populateModal(props.newData);
    }, [props.newData]);
    
    return (
        <div className="MyModal">
                <Modal style={centerModal} open={props.open} onClose={props.handleClose}>
                <form className="MyForm" onSubmit={handleSubmit}>
                    {props.newData.ID === ''?
                        null:
                        <Paper className={classes.paper}>
                            <Typography variant="h1">{props.newData.ID}</Typography >
                        </Paper>
                        
                    }
                    <Input type="text" name="name" placeholder="name" value={name} onChange={handleChange}/>
                    <Input type="text" name="move" placeholder="move" value={move} onChange={handleChange}/>
                    <Input type="number" name="level" placeholder="level" value={level} onChange={handleChange}/>
                    <Button type="submit" variant="contained" color={props.newData.ID === ''?'secondary':'primary'}>
                        {props.newData.ID === ''?'Add':'Update'}
                    </Button>
                </form>
            </ Modal>
        </div>
    )
}

export default MyModal;
