import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import TodoList from './components/TodoList'

function App() {

  return (
    <div className='grid place-items-center bg-blue-100 min-h-screen px-6'>
      <Navbar />

      <div className='w-full max-w-3xl shadow-lg p-6 bg-white'>
        <Header />

        <hr className='mt-4' />
        <TodoList />
        <hr className='mt-4' />
        <Footer />

      </div>
    </div >
  )
}

export default App
