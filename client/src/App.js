import './App.css';
import {useState} from "react";
import Axios from 'axios';

function App() {
  const[name, setName]= useState("");
  const[age, setage]= useState(0);
  const[country, setcountry]= useState("");
  const[position, setposition]= useState("");
  const[wage, setwage]= useState(0);
  const [gender, setGender] = useState("");
  const [empid, setEmpId] = useState("");
  const [dob, setDob] = useState("");


  const[employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    Axios.post('http://localhost:3003/create',
    {name: name, age: age,country: country,position: position,wage: wage,gender:gender,empid:empid,dob:dob}).then(() => {
      console.log("success");
    });
  };

  const getEmployees = () => {
    Axios.get('http://localhost:3003/employees').then((response) => {
      setEmployeeList(response.data);
    });
  };

  

  return (
    <div className="App">
      
      Employee management System
      <div className='information'>
      
      <div className='information-line'>
      <label>FullName </label>
      <input
        type="text"
        placeholder="FullName"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        onBlur={() => {
          if (!name) {
            alert("Full Name is required");
          }
        }}
      />
      </div>


<div className='information-line'>
      <label>Age</label>
      <input type="number" placeholder="Age" onChange={(event) => {
        setage(event.target.value);
        }}/>
</div>


<div className='information-line'>
      <label>Country </label>
      <input type="text" placeholder="Country" onChange={(event) => {
        setcountry(event.target.value);
        }}/>
</div>


<div className='information-line'>
      <label>Position </label>
      <input type="text" placeholder="Position" onChange={(event) => {
        setposition(event.target.value);
        }}/>
</div>


      <div className='information-line'>
      <label>Salary </label>
      <input type="number" placeholder="Salary"onChange={(event) => {
        setwage(event.target.value);
        }}/>
      </div>

      <div className='information-line'>
      <label>Gender </label>
      <input type="text" placeholder="Gender" onChange={(event) => {
        setGender(event.target.value);
        }}/>
      </div>
      
      <div className='information-line'>
      <label>Emp ID </label>
      <input type="text" placeholder="Employee ID" onChange={(event) => {
        setEmpId(event.target.value);
      }} />
      </div>

      <div className='information-line'>
        <label>Date of Birth </label>
        <input type="date" onChange={(event) => {
          setDob(event.target.value);
        }} />
      </div>



      <button onClick={addEmployee}> Add Employee</button>
      
      
      <div className='employees'>
      <button onClick={getEmployees}>Show Employees</button>
      </div>

      <table className='employee-table'>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Country</th>
      <th>Position</th>
      <th>Salary</th>
      <th>Gender</th>
      <th>Empid</th>
      <th>DOB</th>
    </tr>
  </thead>
  <tbody>
    {employeeList.map((val, key) => (
      <tr key={key}>
        <td>{val.name}</td>
        <td>{val.age}</td>
        <td>{val.country}</td>
        <td>{val.position}</td>
        <td>{val.wage}</td>
        <td>{val.gender}</td>
        <td>{val.empid}</td>
        <td>{new Date(val.dob).toLocaleDateString()}</td>

      </tr>
    ))}
  </tbody>
</table>


     

      </div>
    </div>
  );
}

export default App;

