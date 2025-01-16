
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import History from './pages/History'
import Home from './pages/Home'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {


  return (
    <>
    {/* header */}
    <Header/>
    {/* path for landing (base url:http://localhost:5173/),history (http://localhost:5173/history) and home(http://localhost:5173/home) */}
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/history' element={<History/>}/>
 </Routes>
 {/* footer */}
<Footer/>
    </>
  )
}

export default App
