import React from 'react';

const buttonStyle = {
    border: '1px solid lightblue',
    borderRadius: '15px',
    fontSize: '40px',
    fontWeight: '800',
    cursor: 'pointer'
}

const Square = (props) => {

    const {value, index} = props;


    return (
        <button style={buttonStyle}>
            {value}
        </button>
    );
};

export default Square;