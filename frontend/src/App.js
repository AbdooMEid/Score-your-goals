import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header.jsx'
import Dashboard from './Pages/Dahsboard.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'



function App() {
  return (
    <>
    <Router>
    <div className='container'>
      <Header/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App;
