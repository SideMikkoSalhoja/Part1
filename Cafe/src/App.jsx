import { useState } from 'react'

const Statistics = (GiveGood, GiveNeutral, GiveBad) => {
  const Calculate = () => {
    const Total = GiveGood + GiveNeutral + GiveBad;
    const Score= GiveGood * 1 + GiveNeutral * 0 + GiveBad * -1; 
    return Score / Total
  }

  const CalculatePos = () => {
    const total = GiveGood + GiveNeutral + GiveBad;
    return (GiveGood / total) * 100;
  };

  return (
    <table>
      <thead>
        {StatisticLine('good',GiveGood)}
        {StatisticLine('neutral',GiveNeutral)}
        {StatisticLine('bad',GiveBad)}
        {StatisticLine('average', Calculate())}
        {StatisticLine('positive',CalculatePos())}
      </thead>
    </table>
  )
}

const Button = ({func, text}) => (
  <button onClick={func}>{text}</button>
);

const StatisticLine = (LineName, value) => {
  return ( 
  <tr>
    <th>  {LineName}  </th>
    <th>  {value} </th>
  </tr> )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [hasFeedback, setFeedback] = useState(false);

  const HandleGood = () => {
    setGood(good + 1);
    setFeedback(true);
  }

  const HandleNeutral = () => {
    setNeutral(neutral + 1);
    setFeedback(true);
  }

  const HandleBad = () => {
    setBad(bad + 1);
    setFeedback(true);
  }

  return (
    <div>
    <h1>Give feedback</h1>
    <Button func={HandleGood} text='Good'/>
    <Button func={HandleNeutral} text='Neutral'/>
    <Button func={HandleBad} text='Bad'/>
    <h1>Statistics</h1>
    {hasFeedback ? Statistics(good,neutral,bad) : 'No feedback given'}
    </div>
  )
}

export default App
