import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import './App.css'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [isLogin , setIsLogin] = useState<boolean>(true);

  return (
   <Routes>
        <Route path='/' element={<Home isLogin={isLogin} />}  />
        <Route path='/login' element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />}  />
   </Routes>
  )
}

export default App
