import axios from 'axios'


const url = 'http://localhost:3001/persons/'

const getAll = () => {

    return axios.get(url)
        .then(response => {
            return (response.data)
        })


}


const addNew = (person) => {
    return axios.post(url, person).then(response => {
        return response.data
    })

}

const deleteName = person => {

    if (window.confirm(`Delete ${person.name}?`)) {
        return axios.delete(url + person.id).then(response => {
            return response.data
        })
    }
}

const update = person=>{
    return axios.put(url+person.id, person).then(response=>{return response.data})
}

export default {getAll, addNew, deleteName, update}