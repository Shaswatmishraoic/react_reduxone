import React,{useState} from 'react'
import { useLocation } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { EditedStudent } from '../feature/StudentSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function EditStudent() {
    const dispatch=useDispatch();
    const navigate = useNavigate();
    const data=useLocation();
    const studentId = data.state;
    const stdData=useSelector((state)=>state.Student.filter((item)=>item.id===studentId))
    const {Name,Age,Batch,Course}=stdData[0];
    const [newName,setName]=useState(Name)
    const [newAge,setAge]=useState(Age)
    const [newBatch,setBatch]=useState(Batch)
    const [newCourse,setCourse]=useState(Course)

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(EditedStudent({
          id:studentId,
          newName,
          newAge,
          newBatch,
          newCourse
        })

        )
        navigate('/student');
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='one'>
        <label>Name</label>
        <input type='text' value={newName} onChange={(e) =>setName(e.target.value)}/>
        </div>
        <div className='two'>
        <label>Age</label>
        <input type='text' value={newAge} onChange={(e) =>setAge(e.target.value)}/>
        </div>
        <div className='three'>
        <label>Batch</label>
        <input type='text' value={newBatch} onChange={(e) =>setBatch(e.target.value)}/>
        </div>
        <div className='four'>
        <label>Course</label>
        <input type='text' value={newCourse} onChange={(e) =>setCourse(e.target.value)}/>
        </div>
        <input className='Add1' type='submit' value='submit'/>
        <button className='cancle' onClick={()=>navigate('/student')}>Cancle</button>
      </form>
    </div>
  )
}

export default EditStudent;




