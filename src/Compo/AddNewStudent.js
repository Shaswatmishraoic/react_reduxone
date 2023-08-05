import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {AddStudent} from '../feature/StudentSlice'
import { useNavigate } from 'react-router-dom';

function AddNewStudent() {
    const studentList = useSelector((state) => state.Student)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [Name,setName]=useState('')
    const [Age,setAge]=useState('')
    const [Batch,setBatch]=useState('')
    const [Course,setCourse]=useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(AddStudent({
            Id:studentList.length,
            Name,
            Age,
            Batch,
            Course
        }))
        setName('');
        setAge('');
        setBatch('');
        setCourse('');
        navigate('/student')
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className='one'>
        <label>Name</label>
        <input type='text' value={Name} onChange={(e) =>setName(e.target.value)}/>
        </div>
        <div className='two'>
        <label>Age</label>
        <input type='text' value={Age} onChange={(e) =>setAge(e.target.value)}/>
        </div>
        <div className='three'>
        <label>Batch</label>
        <input type='text' value={Batch} onChange={(e) =>setBatch(e.target.value)}/>
        </div>
        <div className='four'>
        <label>Course</label>
        <input type='text' value={Course} onChange={(e) =>setCourse(e.target.value)}/>
        </div>
        <input className='Add1' type='submit' value='submit'/>
        <button className='cancle' onClick={()=>navigate('/student')}>Cancle</button>
      </form>
    </div>
  )
}

export default AddNewStudent
