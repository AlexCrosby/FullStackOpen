import React, {useState, useEffect} from 'react'
import AddNew from "./components/AddNew";
import Numbers from "./components/Numbers";
import Filter from "./components/Filter";
import numberService from "./services/PhoneNumbers"
import Error from "./components/Error";

const App = () => {
    const [persons, setPersons] = useState([]),
        [newName, setNewName] = useState(''),
        [newNumber, setNewNumber] = useState(''),
        [newFilter, setNewFilter] = useState(''),
        [ErrorMessage, setErrorMessage] = useState(null),
        [errorColor, setErrorColor] = useState('red')


    useEffect(() => {
        numberService.getAll().then(response => setPersons(response))

    }, [])

    const addName = (event) => {
        event.preventDefault()
        if (persons.filter(person => person.name.toLowerCase() === newName.toLowerCase()).length > 0) {
            const updateCheck = window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)

            if (updateCheck) {
                let personToUpdate = persons.find(p => p.name === newName)
                personToUpdate = {...personToUpdate, number: newNumber}
                numberService.update(personToUpdate).then(() => {
                    setPersons(persons.map(p => p.name === newName ? personToUpdate : p))
                    setErrorColor('green')
                    setErrorMessage(`Updated ${newName}`)
                    setTimeout(() => {
                        setErrorMessage(null)
                    }, 5000)
                }).catch(error => {
                    setErrorColor('red')
                    setErrorMessage(`Information of ${newName} has already been removed from server`)
                    setTimeout(() => {
                        setErrorMessage(null)
                    }, 5000)

                })

            }


        } else {
            const newPerson = {name: newName, number: newNumber}
            numberService.addNew(newPerson).then(data => {
                setPersons(persons.concat(data))
                setErrorColor('green')
                setErrorMessage(`Added ${newName}`)
            })
                .catch(error => {
                    setErrorColor('red')
                    setErrorMessage(error.response.data.error)

                })
            setTimeout(() => {
                setErrorMessage(null)
            }, 5000)
        }
        setNewName('')
        setNewNumber('')
    }

    const handleFilterChange = event => {
        setNewFilter(event.target.value)
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const deletePerson = (person) => {
        numberService.deleteName(person)
            .then(() => setPersons(persons.filter(p => {
                return p.id !== person.id
            })))

    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Error message={ErrorMessage} color={errorColor}/>
            <Filter handleFilterChange={handleFilterChange}/>
            <h3>Add a new</h3>
            <AddNew handleNameChange={handleNameChange}
                    handleNumberChange={handleNumberChange}
                    newName={newName} newNumber={newNumber}
                    addName={addName}/>

            <h3>Numbers</h3>
            <Numbers persons={persons} filter={newFilter} deletePerson={deletePerson}/>
        </div>
    )
}


export default App