import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <Heading text='give feedback'/>

            <Button handleClick={() => setGood(good + 1)} text={'good'}/>
            <Button handleClick={() => setNeutral(neutral + 1)} text={'neutral'}/>
            <Button handleClick={() => setBad(bad + 1)} text={'bad'}/>

            <Heading text='statistics'/>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

const Button = ({text, handleClick}) => {
    return (
        <button onClick={handleClick}>{text}</button>
    )
}
const Heading = ({text}) => {
    return (
        <h1>
            {text}
        </h1>)
}

const Statistics = ({good, neutral, bad}) => {
    if ((good + neutral + bad) === 0) {
        return (
            <div>
                No feedback given
            </div>
        )

    }
    return (
        <div>
            <table>
                <tbody>
                <Statistic text={'good'} count={good}/>
                <Statistic text={'neutral'} count={neutral}/>
                <Statistic text={'bad '} count={bad}/>
                <Statistic text={'all'} count={good + neutral + bad}/>
                <Statistic text={'average'} count={(good - bad) / (good + neutral + bad)}/>
                <Statistic text={'positive'} count={(good / (good + neutral + bad)) * 100 + ' %'}/>
            </tbody>
                </table>
        </div>)
}

const Statistic = ({text, count}) => {
    return (
        <tr>
            <td>{text} </td>
            <td>&nbsp;</td>
            <td>{count}</td>
        </tr>)
}


ReactDOM.render(
    <App/>
    ,
    document.getElementById('root')
)