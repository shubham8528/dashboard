
import './App.css';
import Topbar from './component/topbaar/Topbar';
import Sidebar from './component/sidebar/sidebar'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CustomizedTables from './pages/user/user';
import Edituser from './component/editUser/edituser';

function App() {
  return (
    <>
      <Router>
        <Topbar />
        <div className='container'>
          <Sidebar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='user' element={<CustomizedTables />} />
            <Route path='edituser' element={<Edituser />} />
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
