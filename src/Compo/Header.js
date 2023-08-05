import React from 'react'
import Home from './Home'
import Student from './Student'
import ContactUs from './ContactUs'
import { Routes,Route } from 'react-router-dom'
import AddNewStudent from './AddNewStudent'
import EditStudent from './EditStudent';
import './Compo.css'
function Header() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/student' element={<Student/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/addnewstudent' element={<AddNewStudent/>}/>
        <Route path='/editstudent' element={<EditStudent/>}/>
      </Routes>
    </div>
  )
}

export default Header



// Header.js

// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './Home';
// import Student from './Student';
// import ContactUs from './ContactUs';
// import AddNewStudent from './AddNewStudent';
// import EditStudent from './EditStudent';

// function Header() {
//   return (
//     <div>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/student/*' element={<Student />} />
//         <Route path='/contact' element={<ContactUs />} />
//         <Route path='/addnewstudent' element={<AddNewStudent />} />
//         <Route path='/editstudent/:studentId' element={<EditStudent />} />
//       </Routes>
//     </div>
//   );
// }

// export default Header;

