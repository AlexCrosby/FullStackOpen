import React from 'react';

const Course = ({course}) => {
    return (
        <div>
            <Header name={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )


}

const Total = ({parts}) => {
    return (
        <div>
            <b>
                total of {parts.reduce((c, p) => c + p.exercises, 0)} exercises
            </b>
        </div>
    )
}


const Header = ({name}) => {
    return (
        <h1>{name}</h1>
    )
}


const Content = ({parts}) =>
    parts.map(part =>
        <p key={part.id}>{part.name} {part.exercises}</p>
    )


export default Course