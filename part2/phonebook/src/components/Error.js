import React from "react";
const Error = ({message,color}) => {


let errorStyle={
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
        if (color==='green'){
        errorStyle.color='green'}
        else{errorStyle.color='red'}
        return (
            <div style={errorStyle}>
                {message}
            </div>
        )
    }
}


export default Error