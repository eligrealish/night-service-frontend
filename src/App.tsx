import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/page'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='*' element={<>404</>} />
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
