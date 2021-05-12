
const Part = (props) => {
  return (
    <>
      <p>{props.info.part1} - {props.info.exercise1}</p>
      <p>{props.info.part2} - {props.info.exercise2}</p>
      <p>{props.info.part3} - {props.info.exercise3}</p>
    </>
  )
}
const Header = (props) => {
  return(<h1>{props.course}</h1>)
  
}

const Content = (props) => {
  return(
    <div>
      <Part info={props}/>
    </div>
    )
  
}

const Total = (props) => {
  return(
    <p>Number of excercise - {props.exercise1+props.exercise2+props.exercise3}</p>
    
  )
  
}
const App = () =>{
  const course = "Half Stack application development"
  const part1 = "Fundamentals of React"
  const exercise1 = 10
  const part2 = "Using props to pass data"
  const exercise2 = 7 
  const part3  = "State of a component"
  const exercise3 = 14

  return(
    <div>
      <Header course={course}/>
      <hr/>
      <Content part1={part1} part2={part2} part3={part3} exercise1={exercise1} exercise2={exercise2} exercise3={exercise3}/>
      <hr/>
      <Total exercise1={exercise1} exercise2={exercise2} exercise3={exercise3}/>
    </div>
  )
}

export default App;
