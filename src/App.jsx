
import './App.css'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginForm from './LoginForm'
import Lost from './Lost'


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>     
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/login' element={<LoginForm/>}/> 
          <Route path='/about' element={<About/>}/> 
          <Route path='/services' element={<Services/>}/> 
          <Route path='/contact' element={<Contact/>}/> 
          <Route path='https://form-routes-project.vercel.app/*' element={<Lost/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
