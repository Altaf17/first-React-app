
import EmployeeList from './Components/EmployeeList';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EmployeeCreate from './Components/EmployeeCreate';
import EmployeeDetail from './Components/EmployeeDetail';
import EmployeeEdit from './Components/EmployeeEdit';
import EmpNavbar  from './Components/EmpNavbar';

function App() {
  return (
    <div className="App" style={{
      backgroundImage:" url(https://www.affordablebackgroundchecks.com/blog/wp-content/uploads/2019/03/Employee-Personal-Details-Check-1200x675.jpg)",
      backgroundColor: "#66b3ff",
      backgroundRepeat: "no-repeat",
      backgroundSize:"cover"
    }}>
      <EmpNavbar/>
      <h1 className='text-center' style={{color:"#ff9933"}}>Skyline-Employee services Pvt-Ltd</h1>
      <h3  className='text-center' style={{color:"#ff99ff"}}>CRUD Operations in React</h3>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmployeeList />} />
          <Route path='/employee/create' element={<EmployeeCreate />} />
          <Route path='/employee/detail/:empid' element={<EmployeeDetail />} />
          <Route path='/employee/edit/:empid' element={<EmployeeEdit />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
