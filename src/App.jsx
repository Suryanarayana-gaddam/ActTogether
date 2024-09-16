
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <Header/>
      <div className='min-h-screen'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
