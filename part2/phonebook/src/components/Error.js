import React from "react";
const Error = ({message}) => {


const errorStyle={
        color: 'green',
        background: 'lightgrey',
        fontSize: '20',
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    }


    if (message === null) {
        return null
    } else {
        return (
            <div style={errorStyle}>
                {message}
            </div>
        )
    }
}


export default Error