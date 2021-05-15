import React from 'react'

const Part = (props) => {
  
  return (
    <li>{props.info.name} - {props.info.exercises}</li>
  )
}
const Header = ({course}) => {
  return(<h1>{course.name}</h1>)
  
}

const Content = ({course}) => {
  return(
    
      <ul>
        {
          course.parts.map(crs => <Part key={crs.id} info={crs}/>)
        }
      </ul>
    )
  
}

const Total = ({course}) =>   <p><strong>Number of excercise - {course.parts.reduce((accumulator,currentValue) => accumulator+currentValue.exercises,0)}</strong></p>

const Course = ({course}) => {
    
  return(
      <>
        <Header course={course}/>
        <Content course={course} /> 
       <Total  course={course}/> 
      </>
    )
  }
export default Course