import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch,currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }

    const buttonStyles = {
        margin: "0 auto",
        borderRadius: '50%',
        height: "2rem",
        width: "2rem",
        lineHeight: "0",
        fontSize: "2rem",
        fontWeight: "bold",
        padding: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "0",
        paddingBottom: "5px",
    }


    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button className='btn btn-success' style={buttonStyles} onClick={event=> increaseAllocation(props.name)}><span>+</span></button></td>
        <td><button className='btn btn-danger' style={buttonStyles} onClick={event=> decreaseAllocation(props.name)}><span>&#8212;</span></button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
