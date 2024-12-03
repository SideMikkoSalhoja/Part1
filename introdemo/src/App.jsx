const App = () => {

  const course = {
  name : 'Half Stack application development',
  parts: [
      {
        name: 'Fundamentals of React',
        ecercises: 10
      }, 
      {
        name: 'Using props to pass data',
        ecercises: 7
      }, 
      {
        name: 'State of a component',
        ecercises: 14
      }
    ]
  }

  const Header = ({name}) => { return <h1>{name}</h1> }
  const Part = ({part}) => { return <p>{part.name} {part.ecercises}</p> }
  const Content = ({show}) => {
     return <div>
      < Part part={show[0]}/>
      < Part part={show[1]}/>
      < Part part={show[2]}/>
      </div>
   }

   const Total = ({calculate}) => {
      return <p>Number of exercises {calculate[0].ecercises + calculate[1].ecercises + calculate[2].ecercises}</p>
   }

  return (
    <div>
    < Header name = {course.name}/>
    < Content show = {course.parts}/>
    < Total calculate = {course.parts}/>
    </div>
  )
}

export default App
