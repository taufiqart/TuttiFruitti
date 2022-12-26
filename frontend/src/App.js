// import './App.css';
// import './output.css'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Home from './pages/home';
// import Product from './pages/product';
// import ProductDetail from './pages/detail';
import Login from './pages/login';
// import Register from './pages/register';
import Navbar from './components/navbar';
import Footer from './components/footer';
// import NotFound from './pages/notFound';
// import User from './pages/user';
import { useEffect, useState } from 'react';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import Home from './pages/home';
// import Logout from './pages/logout';

function App() {
  // const [token, setToken] = useState(null)
  // useEffect(() => {
  //   setToken(localStorage.token)
  // }, [token])
  // console.log(token)
  return (
    <div className="App ">
      <Router>
        {
          window.location.pathname == '/register' || window.location.pathname == '/' ?
            <>
              <Navbar />

              <Routes>
                <Route path='/register' element={<Register />} />
                <Route path='/' element={<Home />} />
                {/* <Route exact path='/' element={<Home />} />
              <Route path='/product' element={<Product />} />
              <Route path='/product/:slug' element={<ProductDetail />} />
            <Route path='/creator/:username' element={<User />} /> */}

              </Routes>
              <Footer />
            </> :
            <Routes>
              <Route path='/dashboard' element={<Dashboard />} />

              <Route path='/login' element={<Login />} />
            </Routes>
        }

      </Router >
    </div >
  );
}

export default App;
