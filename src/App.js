import React from 'react'
import { BrowserRouter  } from 'react-router-dom'
import Header from './Compo/Header'
import Linkhere from './Compo/Linkhere'

function App() {
  return (
    <div>
    <BrowserRouter>
     <Linkhere/>
     <Header/>
     </BrowserRouter>
    </div>
  )
}

export default App
