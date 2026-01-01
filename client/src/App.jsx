import  Compiler from './components/Compiler.jsx'
import Navbar from './components/Navbar.jsx'

const App = () => {
  return (
    <>
    <div className='min-h-screen min-w-screen bg-gray-900'>
      <Navbar/>
      <Compiler />
    </div>
    </>
  )
}

export default App