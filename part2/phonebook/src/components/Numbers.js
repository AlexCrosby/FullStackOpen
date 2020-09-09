import React from "react";

const Numbers = ({persons, filter, deletePerson}) => {
    const peopleToShow = persons.filter(person => {
            return (
                person.name.toLowerCase().includes(filter.toLowerCase()))
        }
    )
    return (
        <>
            {peopleToShow.map(person => <p key={person.id}>
                {person.name} {person.number}&nbsp;
                <button onClick={()=>deletePerson(person)}>delete</button>
            </p>)}

        </>
    )
}

export default Numbers