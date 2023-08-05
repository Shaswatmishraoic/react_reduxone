import React from 'react'
import StudentData from './StudentData'
import { useNavigate } from 'react-router-dom'
function Student() {
  const Navigate = useNavigate();
  return (
    <div>
      <h1>Student</h1>
      <button className='Add' onClick={()=>Navigate('/addnewstudent')}>Add New Student</button>
      <StudentData /> 
    </div>
  )
}

export default Student
