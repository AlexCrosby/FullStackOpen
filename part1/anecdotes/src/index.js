import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])
    const handleVoteClick = () => {
        let copy = [...points]
        copy[selected]++
        setPoints(copy)
    }
    let copy = [...points];
    let highest = points.indexOf(Math.max(...copy));



    return (
        <div>
            <Heading text={'Anecdote of the day'}/>
            {props.anecdotes[selected]}
            <Votes count={points[selected]}/>
            <div>
                <VoteButton handleClick={handleVoteClick}/>
                <Button handleClick={() => setSelected(selectRandom())}/>
            </div>
            <HighestAnecdote score={points[highest]} anecdote={props.anecdotes[highest]}/>

        </div>
    )
}

const HighestAnecdote = ({score, anecdote}) => {
    return(

    <div>
        <Heading text={'Anecdote with most votes'}/>
        {anecdote}
        <Votes count={score}/>
    </div>
)}

const VoteButton = ({handleClick}) => (
    <button onClick={handleClick}>vote</button>
)


const Votes = ({count}) => (
    <div>
        has {count} votes
    </div>
)

function selectRandom() {
    return Math.floor(Math.random() * anecdotes.length);
}

const Button = ({handleClick}) => {
    return (

        <button onClick={handleClick}>next anecdote</button>

    )
}
const Heading = ({text}) => (
    <h1>{text}</h1>
)


const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes}/>
    ,
    document.getElementById('root')
)