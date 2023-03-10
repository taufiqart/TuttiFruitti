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
import Dashboard from './pages/dashboard/dashboard';
import Home from './pages/home';
import Timesheet from './pages/dashboard/timesheet';
import WidgetMe from './components/dashboard/widgetMe';
import Hamburger from './components/dashboard/hamburger';
import Sidebar from './components/dashboard/sidebar';
import WidgetTeam from './components/dashboard/widgetTeam';
import ViewAndEdit from './components/dashboard/viewAndEdit';
import Modal from './components/dashboard/modal';
import ModalEdit from './components/dashboard/modalEdit';
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
              </Routes>
              <Footer />
            </> :
            <div className="main-wrapper">
              <Sidebar />
              <Hamburger />
              <div className="content-wrapper">
                <div className="container-fluid">
                  <div className="w-full h-12 "></div>
                  <Routes>
                    <Route path='/dashboard' element={<Dashboard><WidgetMe /></Dashboard>} />
                    <Route path='/dashboard/team' element={<Dashboard><WidgetTeam /></Dashboard>} />
                    <Route path='/dashboard/me' element={<Dashboard><WidgetMe /></Dashboard>} />
                    <Route path='/organizations/timesheets' element={<Timesheet />} />
                    <Route path='/organizations/time_entries' element={<ViewAndEdit />} />
                    <Route path='/login' element={<Login />} />
                  </Routes>
                </div >
              </div>
            </div>
        }
        {/* modal edit  */}
        <Modal id="modal-edit">
          <ModalEdit />
        </Modal>
      </Router >
    </div >
  );
}

export default App;
